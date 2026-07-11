import { useEffect, useRef } from "react";

/* -------------------------------------------------------------------------- */
/*  Pixel-art sprites                                                         */
/*  Each sprite is a list of strings; any non "." / " " char is a filled px.  */
/* -------------------------------------------------------------------------- */

type Bitmap = boolean[][];

const parse = (rows: string[]): Bitmap =>
  rows.map((r) => [...r].map((c) => c !== "." && c !== " "));

// The Apple logo stamped on the coin's face: leaf on top, bite on the right.
const APPLE = parse([
  "......XX....",
  "......XXX...",
  ".......XX...",
  "........X...",
  "..XXXXXXXX..",
  ".XXXXXXXXXX.",
  "XXXXXXXXXX..",
  "XXXXXXXXXX..",
  "XXXXXXXXXXX.",
  "XXXXXXXXXXXX",
  ".XXXXXXXXXX.",
  ".XXXXXXXXXX.",
  "...XXXXXX...",
]);
const APPLE_W = APPLE[0].length;
const APPLE_H = APPLE.length;

// A layered pine tree (last two rows are the trunk).
const TREE_PINE = parse([
  "....X....",
  "...XXX...",
  "..XXXXX..",
  "...XXX...",
  "..XXXXX..",
  ".XXXXXXX.",
  "..XXXXX..",
  ".XXXXXXX.",
  "XXXXXXXXX",
  "....X....",
  "....X....",
]);

// A round-canopy tree (last two rows are the trunk).
const TREE_ROUND = parse([
  "..XXXX..",
  ".XXXXXX.",
  "XXXXXXXX",
  "XXXXXXXX",
  ".XXXXXX.",
  "..XXXX..",
  "...XX...",
  "...XX...",
]);

/* -------------------------------------------------------------------------- */
/*  Constants (sprite sizes are fixed; the world is sized to the viewport)    */
/* -------------------------------------------------------------------------- */

const PX = 4; // size of one sprite pixel in logical units
const DESIGN_W = 600; // width the original speeds were tuned for

const COIN_R = 30; // coin radius in logical px
const COIN_H = COIN_R * 2;
const COIN_X = 82; // coin's fixed horizontal position (left edge of its box)
const COIN_CX = COIN_X + COIN_R; // coin centre x

const BOX = 46; // one code-box is BOX x BOX logical px

// Vertical physics are in logical px.
const GRAVITY = 1.15;
const JUMP_V = -21; // launch velocity (full-height jump at apex)
const JUMP_CUT = 0.62; // releasing early scales upward velocity -> shorter hop
const FAST_FALL_G = 3.0; // extra pull when holding down mid-air
const SPIN_SPEED = 0.17; // coin spin, radians per step

const BASE_SPEED = 6; // normalized; multiplied by the width scale on screen
const MAX_SPEED = 13;

const COLORS = {
  fg: "#e5e5e5",
  dim: "#3f3f46",
  ground: "#52525b",
  score: "#a1a1aa",
  scoreDim: "#71717a",
  token: "#26262c", // drifting code tokens in the sky
  treeLeaf: "#3a5f50",
  treeLeafFar: "#283d34",
  treeTrunk: "#3a3330",
  boxFill: "#191a1e",
  boxEdge: "#6b7280",
  boxEdgeHi: "#9aa2ad",
  coinFace: "#f5b60d",
  coinFaceBack: "#d99a05",
  coinRim: "#a06a08",
  coinHi: "#ffe493",
  coinEdge: "#f0c53f",
  apple: "#141416",
};

// Soft syntax-highlight colors for the box glyphs.
const SYN = ["#82aaff", "#c792ea", "#c3e88d", "#f78c6c", "#89ddff", "#ffcb6b"];

// Short code glyphs stamped on the boxes and drifting through the sky.
const BOX_SYMS = ["{}", "<>", "()", "[]", "=>", "&&", "||", "::", "//", "==", "!=", "++", "fn", "$_", "#!", ";;"];
const AIR_SYMS = ["</>", "{ }", "( )", "=>", "[]", "::", "&&", "||", "0x", "fn", "git", "npm", "sudo", ";", ".ts", ".js"];

const HS_KEY = "coinrun-highscore";

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

/* -------------------------------------------------------------------------- */
/*  Game state                                                                */
/* -------------------------------------------------------------------------- */

type Phase = "idle" | "running" | "over";

interface Box {
  c: number; // column index within the obstacle
  r: number; // row index (0 = bottom box)
  sym: string;
  color: string;
}

interface Obstacle {
  x: number;
  cols: number[]; // height (box count) of each column, left to right
  w: number;
  boxes: Box[];
}

interface AirToken {
  x: number;
  y: number;
  vf: number; // parallax factor
  sym: string;
  size: number;
}

interface Tree {
  x: number;
  scale: number;
  kind: 0 | 1;
  vf: number;
}

interface Pebble {
  x: number;
  y: number;
  w: number;
}

interface GameState {
  phase: Phase;
  feetY: number; // y of coin's bottom (dips below groundY while airborne)
  vy: number;
  fastFall: boolean;
  onGround: boolean;
  jumpHeld: boolean;
  speed: number;
  distance: number;
  score: number;
  highScore: number;
  newHigh: boolean;
  obstacles: Obstacle[];
  tokens: AirToken[];
  trees: Tree[];
  pebbles: Pebble[];
  spawnTimer: number;
  coinSpin: number;
  flash: number; // milestone flash timer
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function CoinGame({ onStart }: { onStart?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<GameState | null>(null);
  const onStartRef = useRef(onStart);
  useEffect(() => {
    onStartRef.current = onStart;
  }, [onStart]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // World dimensions, recomputed from the viewport on mount and on resize.
    let W = window.innerWidth;
    let H = window.innerHeight;
    let groundY = H - 96;
    let speedScale = 1; // scales horizontal motion so timing tracks screen width

    const layout = () => {
      W = Math.max(320, window.innerWidth);
      H = Math.max(240, window.innerHeight);
      groundY = Math.round(H - clamp(H * 0.14, 84, 150));
      speedScale = clamp(W / DESIGN_W, 0.75, 2.6);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    layout();

    /* --- world factories ------------------------------------------------ */

    const makeTokens = (): AirToken[] =>
      Array.from({ length: Math.max(4, Math.round(W / 300)) }, () => ({
        x: rand(0, W),
        y: rand(H * 0.06, H * 0.5),
        vf: rand(0.15, 0.4),
        sym: pick(AIR_SYMS),
        size: rand(12, 22),
      }));

    const makeTrees = (): Tree[] =>
      Array.from({ length: Math.max(4, Math.round(W / 240)) }, () => ({
        x: rand(0, W),
        scale: rand(0.7, 1.5),
        kind: (Math.random() < 0.5 ? 0 : 1) as 0 | 1,
        vf: rand(0.35, 0.62),
      }));

    const makePebbles = (): Pebble[] =>
      Array.from({ length: Math.max(10, Math.round(W / 55)) }, () => ({
        x: rand(0, W),
        y: groundY + rand(8, 26),
        w: rand(3, 12),
      }));

    const makeState = (highScore: number): GameState => ({
      phase: "idle",
      feetY: groundY,
      vy: 0,
      fastFall: false,
      onGround: true,
      jumpHeld: false,
      speed: BASE_SPEED,
      distance: 0,
      score: 0,
      highScore,
      newHigh: false,
      obstacles: [],
      tokens: makeTokens(),
      trees: makeTrees(),
      pebbles: makePebbles(),
      spawnTimer: 46,
      coinSpin: 0,
      flash: 0,
    });

    let highScore = 0;
    try {
      highScore = Number(localStorage.getItem(HS_KEY)) || 0;
    } catch {
      /* localStorage may be unavailable */
    }
    const state = makeState(highScore);
    stateRef.current = state;

    const onResize = () => {
      layout();
      state.tokens = makeTokens();
      state.trees = makeTrees();
      state.pebbles = makePebbles();
      if (state.onGround) state.feetY = groundY;
    };
    window.addEventListener("resize", onResize);

    /* --- input ---------------------------------------------------------- */

    const start = () => {
      const hs = state.highScore;
      Object.assign(state, makeState(hs));
      state.phase = "running";
      onStartRef.current?.();
    };

    const jump = () => {
      if (state.onGround) {
        state.vy = JUMP_V;
        state.onGround = false;
        state.fastFall = false;
        state.jumpHeld = true;
      }
    };

    // Releasing the jump early cuts the upward velocity, so a quick tap is a
    // short hop and holding carries the coin higher / farther.
    const releaseJump = () => {
      state.jumpHeld = false;
      if (!state.onGround && state.vy < JUMP_V * JUMP_CUT) {
        state.vy = JUMP_V * JUMP_CUT;
      }
    };

    const pressAction = () => {
      if (state.phase === "running") jump();
      else start(); // idle or over -> (re)start
    };

    const isJumpKey = (k: string) =>
      k === " " || k === "ArrowUp" || k === "Spacebar" || k === "w" || k === "W";
    const isDownKey = (k: string) => k === "ArrowDown" || k === "s" || k === "S";

    const onKeyDown = (e: KeyboardEvent) => {
      if (isJumpKey(e.key)) {
        e.preventDefault();
        if (e.repeat) return; // hold is tracked via jumpHeld, not key-repeat
        pressAction();
      } else if (isDownKey(e.key)) {
        e.preventDefault();
        if (state.phase !== "running") start();
        else state.fastFall = true;
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (isJumpKey(e.key)) releaseJump();
      else if (isDownKey(e.key)) state.fastFall = false;
    };

    const onPointerDown = (e: Event) => {
      e.preventDefault();
      pressAction();
    };
    const onPointerUp = () => releaseJump();

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("pointerdown", onPointerDown, { passive: false });
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerUp);

    /* --- spawning ------------------------------------------------------- */

    // Obstacle shapes, unlocked as the score climbs:
    //   [1]    single box        [2]  two stacked      [3]  three stacked
    //   [2, 1] a two-stack with a single box beside it (needs a longer jump).
    const pickPattern = (): number[] => {
      const s = state.score;
      const r = Math.random();
      if (s > 340 && r < 0.2) return [2, 1];
      if (s > 150 && r < 0.36) return [3];
      if (r < 0.6) return [1];
      return [2];
    };

    const spawn = () => {
      const cols = pickPattern();
      const boxes: Box[] = [];
      for (let c = 0; c < cols.length; c++) {
        for (let r = 0; r < cols[c]; r++) {
          boxes.push({ c, r, sym: pick(BOX_SYMS), color: pick(SYN) });
        }
      }
      const w = cols.length * BOX;
      state.obstacles.push({ x: W + 20, cols, w, boxes });
      // Gap grows with speed and obstacle width so it always stays clearable.
      const gap = rand(150, 220) + w + state.speed * 13 + Math.random() * state.speed * 20;
      state.spawnTimer = gap;
    };

    /* --- collision ------------------------------------------------------ */

    // The round coin collides as a slightly inset box against each filled column.
    const hits = (ob: Obstacle): boolean => {
      const inset = COIN_R * 0.3;
      const cLeft = COIN_X + inset;
      const cRight = COIN_X + COIN_H - inset;
      const cTop = state.feetY - COIN_H + inset;
      const cBottom = state.feetY - inset;

      for (let i = 0; i < ob.cols.length; i++) {
        const h = ob.cols[i];
        if (!h) continue;
        const bx = ob.x + i * BOX;
        const bLeft = bx + BOX * 0.12;
        const bRight = bx + BOX - BOX * 0.12;
        const bTop = groundY - h * BOX + BOX * 0.1;
        if (cLeft < bRight && cRight > bLeft && cTop < groundY && cBottom > bTop) return true;
      }
      return false;
    };

    /* --- update --------------------------------------------------------- */

    const update = (step: number) => {
      // Scroll scenery regardless of phase for a lively idle screen.
      const worldSpeed = (state.phase === "running" ? state.speed : BASE_SPEED) * speedScale;

      for (const tk of state.tokens) {
        tk.x -= worldSpeed * tk.vf * step;
        if (tk.x < -60) {
          tk.x = W + rand(0, 120);
          tk.y = rand(H * 0.06, H * 0.5);
          tk.vf = rand(0.15, 0.4);
          tk.sym = pick(AIR_SYMS);
          tk.size = rand(12, 22);
        }
      }
      for (const tr of state.trees) {
        tr.x -= worldSpeed * tr.vf * step;
        if (tr.x < -60) {
          tr.x = W + rand(0, 160);
          tr.scale = rand(0.7, 1.5);
          tr.kind = (Math.random() < 0.5 ? 0 : 1) as 0 | 1;
          tr.vf = rand(0.35, 0.62);
        }
      }
      for (const pb of state.pebbles) {
        pb.x -= worldSpeed * step;
        if (pb.x < -14) {
          pb.x = W + rand(0, 60);
          pb.y = groundY + rand(8, 26);
          pb.w = rand(3, 12);
        }
      }

      // The coin keeps spinning while idle or running; it freezes on game over.
      if (state.phase !== "over") state.coinSpin += SPIN_SPEED * step;

      if (state.phase !== "running") return;

      // Difficulty ramp.
      state.distance += state.speed * step;
      state.speed = Math.min(MAX_SPEED, BASE_SPEED + state.distance / 1800);

      const prevScore = state.score;
      state.score = Math.floor(state.distance / 12);
      if (Math.floor(prevScore / 100) !== Math.floor(state.score / 100) && state.score > 0) {
        state.flash = 22;
      }
      if (state.flash > 0) state.flash -= step;

      // Vertical physics.
      const g = !state.onGround && state.fastFall ? FAST_FALL_G : GRAVITY;
      state.vy += g * step;
      state.feetY += state.vy * step;
      if (state.feetY >= groundY) {
        state.feetY = groundY;
        state.vy = 0;
        state.onGround = true;
      }

      // Obstacles.
      state.spawnTimer -= state.speed * step;
      if (state.spawnTimer <= 0) spawn();

      const move = state.speed * speedScale * step;
      for (const ob of state.obstacles) {
        ob.x -= move;
        if (hits(ob)) endGame();
      }
      state.obstacles = state.obstacles.filter((o) => o.x + o.w > -4);
    };

    const endGame = () => {
      if (state.phase !== "running") return;
      state.phase = "over";
      state.fastFall = false;
      state.jumpHeld = false;
      if (state.score > state.highScore) {
        state.highScore = state.score;
        state.newHigh = true;
        try {
          localStorage.setItem(HS_KEY, String(state.score));
        } catch {
          /* ignore */
        }
      }
    };

    /* --- drawing helpers ------------------------------------------------ */

    const snap = (v: number) => Math.round(v / PX) * PX;

    // Pixel-snapped filled ellipse, drawn row by row for a crisp coin.
    const fillEllipse = (cx: number, cy: number, rx: number, ry: number, color: string) => {
      ctx.fillStyle = color;
      for (let yy = -ry; yy <= ry; yy += PX) {
        const t = yy / ry;
        const hw = rx * Math.sqrt(Math.max(0, 1 - t * t));
        if (hw < 0.5) continue;
        ctx.fillRect(snap(cx - hw), snap(cy + yy), Math.max(PX, snap(2 * hw)), PX + 0.5);
      }
    };

    // A boolean bitmap, with independent x/y cell sizes (used to squash the
    // Apple logo as the coin spins).
    const drawBitmap = (
      bmp: Bitmap,
      x: number,
      y: number,
      color: string,
      cellW = PX,
      cellH = PX,
    ) => {
      ctx.fillStyle = color;
      for (let r = 0; r < bmp.length; r++) {
        const row = bmp[r];
        for (let c = 0; c < row.length; c++) {
          if (row[c]) ctx.fillRect(x + c * cellW, y + r * cellH, cellW + 0.6, cellH + 0.6);
        }
      }
    };

    const drawTree = (t: Tree) => {
      const bmp = t.kind ? TREE_ROUND : TREE_PINE;
      const cell = PX * t.scale;
      const th = bmp.length * cell;
      const x = t.x;
      const y = groundY - th + cell; // trunk foot rests just on the ground line
      const leaf = t.scale < 0.95 ? COLORS.treeLeafFar : COLORS.treeLeaf;
      const trunkFrom = bmp.length - 2;
      for (let r = 0; r < bmp.length; r++) {
        const row = bmp[r];
        ctx.fillStyle = r >= trunkFrom ? COLORS.treeTrunk : leaf;
        for (let c = 0; c < row.length; c++) {
          if (row[c]) ctx.fillRect(x + c * cell, y + r * cell, cell + 0.6, cell + 0.6);
        }
      }
    };

    const drawBox = (px: number, py: number, sym: string, color: string) => {
      ctx.fillStyle = COLORS.boxFill;
      ctx.fillRect(px, py, BOX, BOX);
      ctx.lineWidth = 2;
      ctx.strokeStyle = COLORS.boxEdge;
      ctx.strokeRect(px + 1, py + 1, BOX - 2, BOX - 2);
      ctx.fillStyle = COLORS.boxEdgeHi; // top bevel highlight
      ctx.fillRect(px + 2, py + 2, BOX - 4, 2);

      ctx.font = `700 ${Math.round(BOX * 0.42)}px ${MONO}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.fillText(sym, px + BOX / 2, py + BOX / 2 + 2);
    };

    const drawCoin = () => {
      const cy = state.feetY - COIN_R;
      const over = state.phase === "over";

      // Soft contact shadow that shrinks as the coin rises.
      const lift = clamp((groundY - state.feetY) / 360, 0, 1);
      ctx.fillStyle = `rgba(0,0,0,${0.3 - lift * 0.22})`;
      fillEllipse(COIN_CX, groundY + 7, COIN_R * (1 - lift * 0.5), 5 * (1 - lift * 0.4), `rgba(0,0,0,${0.28 - lift * 0.2})`);

      // On game over the coin sits still, facing forward.
      const sx = over ? 1 : Math.cos(state.coinSpin);
      const squash = Math.abs(sx);
      const rx = COIN_R * squash;

      // Edge-on: a thin bright sliver reads as the coin's rim.
      if (rx < COIN_R * 0.14) {
        ctx.fillStyle = COLORS.coinEdge;
        const bw = Math.max(PX, COIN_R * 0.26);
        ctx.fillRect(snap(COIN_CX - bw / 2), snap(cy - COIN_R), bw, COIN_H);
        return;
      }

      fillEllipse(COIN_CX, cy, rx, COIN_R, COLORS.coinRim);
      fillEllipse(COIN_CX, cy, Math.max(PX, rx - PX), COIN_R - PX, sx >= 0 ? COLORS.coinFace : COLORS.coinFaceBack);

      // Metallic sheen near the top-left edge.
      fillEllipse(COIN_CX - rx * 0.34, cy - COIN_R * 0.46, rx * 0.32, COIN_R * 0.22, COLORS.coinHi);

      // The Apple logo shows on the front face, squashed with the spin.
      if (sx > 0 && squash > 0.42) {
        const scale = 0.84; // leave a gold margin so it reads as "stamped"
        const cellW = PX * squash * scale;
        const cellH = PX * scale;
        const aw = APPLE_W * cellW;
        const ah = APPLE_H * cellH;
        drawBitmap(APPLE, COIN_CX - aw / 2, cy - ah / 2 - 1, COLORS.apple, cellW, cellH);
      }

      if (over) {
        ctx.fillStyle = "rgba(10,10,10,0.35)";
        fillEllipse(COIN_CX, cy, rx, COIN_R, "rgba(10,10,10,0.35)");
      }
    };

    /* --- render --------------------------------------------------------- */

    const pad = (n: number) => String(n).padStart(5, "0");

    const drawScore = () => {
      ctx.font = `600 18px ${MONO}`;
      ctx.textBaseline = "top";
      ctx.textAlign = "right";
      let x = W - 20;
      const bright = state.flash > 0 && Math.floor(state.flash / 4) % 2 === 0;
      ctx.fillStyle = bright ? COLORS.fg : COLORS.score;
      ctx.fillText(pad(state.score), x, 18);
      if (state.highScore > 0) {
        x -= 92;
        ctx.fillStyle = COLORS.scoreDim;
        ctx.fillText("HI " + pad(state.highScore), x, 18);
      }
      ctx.textAlign = "left";
    };

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // Drifting code tokens in the sky.
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = COLORS.token;
      for (const tk of state.tokens) {
        ctx.font = `600 ${Math.round(tk.size)}px ${MONO}`;
        ctx.fillText(tk.sym, tk.x, tk.y);
      }
      ctx.textAlign = "left";

      // Trees along the horizon.
      for (const tr of state.trees) drawTree(tr);

      // Ground line + pebbles.
      ctx.fillStyle = COLORS.ground;
      ctx.fillRect(0, groundY + 1, W, 3);
      for (const pb of state.pebbles) ctx.fillRect(pb.x, pb.y, pb.w, 3);

      // Obstacle boxes.
      for (const ob of state.obstacles) {
        for (const b of ob.boxes) {
          drawBox(ob.x + b.c * BOX, groundY - (b.r + 1) * BOX, b.sym, b.color);
        }
      }

      drawCoin();
      drawScore();

      // Game-over overlay (idle prompts live in the HTML layer over the canvas).
      if (state.phase === "over") {
        ctx.textAlign = "center";
        ctx.fillStyle = COLORS.fg;
        ctx.font = `700 34px ${MONO}`;
        ctx.fillText("G A M E   O V E R", W / 2, H / 2 - 26);
        ctx.fillStyle = COLORS.score;
        ctx.font = `600 15px ${MONO}`;
        ctx.fillText(
          state.newHigh ? "NEW HIGH SCORE — SPACE / TAP TO RETRY" : "SPACE / TAP TO RETRY",
          W / 2,
          H / 2 + 16,
        );
        ctx.textAlign = "left";
      }
      ctx.textBaseline = "alphabetic";
    };

    /* --- loop ----------------------------------------------------------- */

    let raf = 0;
    let last = performance.now();
    const frame = (now: number) => {
      const dt = now - last;
      last = now;
      const step = Math.min(3, dt / (1000 / 60)); // clamp after tab switches
      update(step);
      render();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="An endless runner. You are a spinning coin with an Apple logo. Press space or tap to jump, hold to jump higher, down arrow to drop faster."
      className="absolute inset-0 h-full w-full cursor-pointer touch-none select-none"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
