import { useEffect, useRef } from "react";

/* -------------------------------------------------------------------------- */
/*  Pixel-art sprites                                                         */
/*  Each sprite is a list of strings; any non "." / " " char is a filled px.  */
/* -------------------------------------------------------------------------- */

type Bitmap = boolean[][];

const parse = (rows: string[]): Bitmap =>
  rows.map((r) => [...r].map((c) => c !== "." && c !== " "));

// Shared upper body of the running dino (rows 0-16); legs are swapped below.
const DINO_BODY = [
  "............XXXXXXX.",
  "............XX.XXXX.",
  "............XXXXXXX.",
  "............XXX.....",
  "..........XXXXXX....",
  ".XX.......XXXXXXX...",
  ".XXX......XXXXXXXX..",
  ".XXXXX...XXXXXXXXX..",
  ".XXXXXXXXXXXXXXXXX..",
  "..XXXXXXXXXXXXXXXX..",
  "...XXXXXXXXXXXXXXX..",
  "....XXXXXXXXXXXXX...",
  ".....XXXXXXXXXXX....",
  ".....XXXXXXXXXX.....",
  ".....XXXXXXXXX......",
  ".....XXXXXXX........",
  ".....XXXXXX.........",
];

const DINO_STAND = parse([
  ...DINO_BODY,
  ".....XX.XXX........",
  ".....XX..XX........",
  ".....XX..XX........",
  ".....XX..XX........",
  "....XXX..XXX.......",
]);

const DINO_RUN1 = parse([
  ...DINO_BODY,
  ".....XX..XX........",
  ".....XX..XX........",
  ".....XX............",
  ".....XX............",
  "....XXX............",
]);

const DINO_RUN2 = parse([
  ...DINO_BODY,
  ".....XX..XX........",
  ".....XX..XX........",
  ".........XX........",
  ".........XX........",
  ".......XXXX........",
]);

// Dead pose: same body, closed "X" eye instead of the open gap.
const DINO_DEAD = parse([
  "............XXXXXXX.",
  "............XXXXXXX.",
  "............XX.X.XX.",
  "............XXX.XX..",
  "..........XXXXXX....",
  ".XX.......XXXXXXX...",
  ".XXX......XXXXXXXX..",
  ".XXXXX...XXXXXXXXX..",
  ".XXXXXXXXXXXXXXXXX..",
  "..XXXXXXXXXXXXXXXX..",
  "...XXXXXXXXXXXXXXX..",
  "....XXXXXXXXXXXXX...",
  ".....XXXXXXXXXXX....",
  ".....XXXXXXXXXX.....",
  ".....XXXXXXXXX......",
  ".....XXXXXXX........",
  ".....XXXXXX.........",
  ".....XX.XXX........",
  ".....XX..XX........",
  ".....XX..XX........",
  ".....XX..XX........",
  "....XXX..XXX.......",
]);

const DUCK_BODY = [
  "..................XXXXXX",
  "..................XX.XXX",
  "XXX...............XXXXXX",
  ".XXXXXXXXXXXXXXXXXXXXXX.",
  "..XXXXXXXXXXXXXXXXXXXXX.",
  "...XXXXXXXXXXXXXXXXXXX..",
  "....XXXXXXXXXXXXXXXX....",
  ".....XXXXXXXXXXXXX......",
  ".....XXXXXXXXXX.........",
];

const DINO_DUCK1 = parse([
  ...DUCK_BODY,
  ".....XX...XXX...........",
  ".....XX...XX............",
  "....XXX...XX............",
]);

const DINO_DUCK2 = parse([
  ...DUCK_BODY,
  ".....XX...XXX...........",
  "....XX....XX............",
  "....XX....XXX...........",
]);

// A saguaro cactus with two arms.
const CACTUS = parse([
  "...XX...",
  "...XX...",
  "...XX...",
  "...XX...",
  "X..XX...",
  "X..XX..X",
  "X..XX..X",
  "X..XX..X",
  "XXXXX..X",
  "...XXXXX",
  "...XX...",
  "...XX...",
  "...XX...",
  "...XX...",
  "...XX...",
  "...XX...",
]);

// Pterodactyl, two wing frames.
const BIRD1 = parse([
  "..XX............",
  ".XXXXX..........",
  "XXXXXXXX........",
  ".XXXXXXXXXXXXX..",
  "..XXXXXXXXXXXXXX",
  "..XXXXX.........",
  "...XX...........",
  "................",
  "................",
  "................",
]);

const BIRD2 = parse([
  "................",
  "................",
  "...XX...........",
  "..XXXXX.........",
  ".XXXXXXXXXXXXX..",
  "XXXXXXXXXXXXXXXX",
  "XXXXXXXX........",
  ".XXXXX..........",
  "..XX............",
  "................",
]);

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const PX = 2; // size of one sprite pixel in logical units
const W = 600; // logical canvas width
const H = 160; // logical canvas height
const GROUND_Y = 132; // y of the ground line (feet rest here)
const DINO_X = 42; // dino's fixed horizontal position

const DINO_W = DINO_STAND[0].length * PX;
const DINO_H = DINO_STAND.length * PX;
const DUCK_W = DINO_DUCK1[0].length * PX;
const DUCK_H = DINO_DUCK1.length * PX;
const CACTUS_UNIT_W = CACTUS[0].length * PX;
const CACTUS_H = CACTUS.length * PX;
const BIRD_W = BIRD1[0].length * PX;
const BIRD_H = BIRD1.length * PX;

const GRAVITY = 0.62;
const JUMP_V = -10.7;
const DUCK_GRAVITY = 1.5; // extra pull when holding down mid-air
const BASE_SPEED = 6;
const MAX_SPEED = 13;

// Bird altitudes: high one you run under, mid you duck, low you jump.
const BIRD_HEIGHTS = [GROUND_Y - BIRD_H - 52, GROUND_Y - BIRD_H - 26, GROUND_Y - BIRD_H];

const COLORS = {
  fg: "#e5e5e5",
  dim: "#3f3f46",
  ground: "#52525b",
  score: "#a1a1aa",
  scoreDim: "#71717a",
};

const HS_KEY = "dino-highscore";

/* -------------------------------------------------------------------------- */
/*  Game state                                                                */
/* -------------------------------------------------------------------------- */

type Phase = "idle" | "running" | "over";

interface Obstacle {
  kind: "cactus" | "bird";
  x: number;
  y: number;
  w: number;
  h: number;
  count: number; // cactus cluster size
  frame: number; // bird wing animation
}

interface Cloud {
  x: number;
  y: number;
  vf: number; // parallax factor
}

interface Pebble {
  x: number;
  y: number;
  w: number;
}

interface GameState {
  phase: Phase;
  feetY: number; // y of dino feet (dips below GROUND_Y while airborne)
  vy: number;
  ducking: boolean;
  onGround: boolean;
  speed: number;
  distance: number;
  score: number;
  highScore: number;
  newHigh: boolean;
  obstacles: Obstacle[];
  clouds: Cloud[];
  pebbles: Pebble[];
  spawnTimer: number;
  legTimer: number;
  legFrame: number;
  flash: number; // milestone flash timer
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);

function makeClouds(): Cloud[] {
  return Array.from({ length: 3 }, () => ({
    x: rand(0, W),
    y: rand(18, 64),
    vf: rand(0.2, 0.4),
  }));
}

function makePebbles(): Pebble[] {
  return Array.from({ length: 14 }, () => ({
    x: rand(0, W),
    y: GROUND_Y + rand(4, 12),
    w: rand(2, 7),
  }));
}

function makeState(highScore: number): GameState {
  return {
    phase: "idle",
    feetY: GROUND_Y,
    vy: 0,
    ducking: false,
    onGround: true,
    speed: BASE_SPEED,
    distance: 0,
    score: 0,
    highScore,
    newHigh: false,
    obstacles: [],
    clouds: makeClouds(),
    pebbles: makePebbles(),
    spawnTimer: 40,
    legTimer: 0,
    legFrame: 0,
    flash: 0,
  };
}

/* -------------------------------------------------------------------------- */
/*  Drawing helpers                                                           */
/* -------------------------------------------------------------------------- */

function drawBitmap(
  ctx: CanvasRenderingContext2D,
  bmp: Bitmap,
  x: number,
  y: number,
  color: string,
) {
  ctx.fillStyle = color;
  for (let r = 0; r < bmp.length; r++) {
    const row = bmp[r];
    for (let c = 0; c < row.length; c++) {
      if (row[c]) ctx.fillRect(x + c * PX, y + r * PX, PX, PX);
    }
  }
}

function drawCactus(ctx: CanvasRenderingContext2D, ob: Obstacle) {
  for (let i = 0; i < ob.count; i++) {
    drawBitmap(ctx, CACTUS, ob.x + i * (CACTUS_UNIT_W - PX), GROUND_Y - CACTUS_H, COLORS.fg);
  }
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<GameState | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Crisp pixels on hi-dpi screens.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;

    let highScore = 0;
    try {
      highScore = Number(localStorage.getItem(HS_KEY)) || 0;
    } catch {
      /* localStorage may be unavailable */
    }
    const state = makeState(highScore);
    stateRef.current = state;

    /* --- input ---------------------------------------------------------- */

    const start = () => {
      const hs = state.highScore;
      Object.assign(state, makeState(hs));
      state.phase = "running";
    };

    const jump = () => {
      if (state.onGround) {
        state.vy = JUMP_V;
        state.onGround = false;
        state.ducking = false;
      }
    };

    const action = () => {
      if (state.phase === "running") jump();
      else start(); // idle or over -> (re)start; first press also jumps below
    };

    const setDuck = (on: boolean) => {
      if (state.phase !== "running") return;
      state.ducking = on;
    };

    const isJumpKey = (k: string) =>
      k === " " || k === "ArrowUp" || k === "Spacebar" || k === "w" || k === "W";
    const isDuckKey = (k: string) => k === "ArrowDown" || k === "s" || k === "S";

    const onKeyDown = (e: KeyboardEvent) => {
      if (isJumpKey(e.key)) {
        e.preventDefault();
        action();
      } else if (isDuckKey(e.key)) {
        e.preventDefault();
        if (state.phase !== "running") start();
        else setDuck(true);
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (isDuckKey(e.key)) setDuck(false);
    };

    const onPointerDown = (e: Event) => {
      e.preventDefault();
      action();
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("pointerdown", onPointerDown, { passive: false });

    /* --- spawning ------------------------------------------------------- */

    const spawn = () => {
      const canBird = state.score > 260 && Math.random() < 0.28;
      if (canBird) {
        const y = BIRD_HEIGHTS[Math.floor(rand(0, BIRD_HEIGHTS.length))];
        state.obstacles.push({
          kind: "bird",
          x: W + 10,
          y,
          w: BIRD_W,
          h: BIRD_H,
          count: 1,
          frame: 0,
        });
      } else {
        const count = Math.random() < 0.5 ? 1 : Math.random() < 0.72 ? 2 : 3;
        state.obstacles.push({
          kind: "cactus",
          x: W + 10,
          y: GROUND_Y - CACTUS_H,
          w: CACTUS_UNIT_W + (count - 1) * (CACTUS_UNIT_W - PX),
          h: CACTUS_H,
          count,
          frame: 0,
        });
      }
      // Gap grows with speed so it always stays clearable.
      const gap = rand(150, 230) + state.speed * 12 + Math.random() * state.speed * 22;
      state.spawnTimer = gap;
    };

    /* --- collision ------------------------------------------------------ */

    const hits = (ob: Obstacle): boolean => {
      const duck = state.ducking && state.onGround;
      const dw = duck ? DUCK_W : DINO_W;
      const dh = duck ? DUCK_H : DINO_H;
      const dx = DINO_X + 7;
      const dTop = state.feetY - dh + 4;
      const dRight = DINO_X + dw - 7;
      const dBottom = state.feetY - 2;

      const ox = ob.x + 3;
      const oy = ob.y + 3;
      const oRight = ob.x + ob.w - 3;
      const oBottom = ob.y + ob.h - 3;

      return dx < oRight && dRight > ox && dTop < oBottom && dBottom > oy;
    };

    /* --- update --------------------------------------------------------- */

    const update = (step: number) => {
      // Scroll clouds & ground regardless of phase for a lively idle screen.
      const drift = (state.phase === "running" ? state.speed : BASE_SPEED) * step;
      for (const cl of state.clouds) {
        cl.x -= drift * cl.vf;
        if (cl.x < -60) {
          cl.x = W + rand(0, 80);
          cl.y = rand(18, 64);
          cl.vf = rand(0.2, 0.4);
        }
      }
      for (const pb of state.pebbles) {
        pb.x -= drift;
        if (pb.x < -8) {
          pb.x = W + rand(0, 40);
          pb.y = GROUND_Y + rand(4, 12);
          pb.w = rand(2, 7);
        }
      }

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
      const g = !state.onGround && state.ducking ? DUCK_GRAVITY : GRAVITY;
      state.vy += g * step;
      state.feetY += state.vy * step;
      if (state.feetY >= GROUND_Y) {
        state.feetY = GROUND_Y;
        state.vy = 0;
        state.onGround = true;
      }

      // Leg animation.
      state.legTimer += step;
      if (state.legTimer > 5) {
        state.legTimer = 0;
        state.legFrame ^= 1;
      }

      // Obstacles.
      state.spawnTimer -= state.speed * step;
      if (state.spawnTimer <= 0) spawn();

      for (const ob of state.obstacles) {
        ob.x -= state.speed * step;
        if (ob.kind === "bird") {
          ob.frame += step;
          if (hits(ob)) endGame();
        } else if (hits(ob)) {
          endGame();
        }
      }
      state.obstacles = state.obstacles.filter((o) => o.x + o.w > -4);
    };

    const endGame = () => {
      if (state.phase !== "running") return;
      state.phase = "over";
      state.ducking = false;
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

    /* --- render --------------------------------------------------------- */

    const drawScore = () => {
      ctx.font = "600 13px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textBaseline = "top";
      const pad = (n: number) => String(n).padStart(5, "0");
      let x = W - 12;
      ctx.textAlign = "right";
      const bright = state.flash > 0 && Math.floor(state.flash / 4) % 2 === 0;
      ctx.fillStyle = bright ? COLORS.fg : COLORS.score;
      ctx.fillText(pad(state.score), x, 12);
      if (state.highScore > 0) {
        x -= 62;
        ctx.fillStyle = COLORS.scoreDim;
        ctx.fillText("HI " + pad(state.highScore), x, 12);
      }
      ctx.textAlign = "left";
    };

    const drawDino = () => {
      if (state.phase === "over") {
        drawBitmap(ctx, DINO_DEAD, DINO_X, state.feetY - DINO_H, COLORS.fg);
        return;
      }
      if (state.ducking && state.onGround) {
        const bmp = state.legFrame ? DINO_DUCK2 : DINO_DUCK1;
        drawBitmap(ctx, bmp, DINO_X, state.feetY - DUCK_H, COLORS.fg);
        return;
      }
      let bmp: Bitmap;
      if (state.phase === "idle") bmp = DINO_STAND;
      else if (!state.onGround) bmp = DINO_STAND;
      else bmp = state.legFrame ? DINO_RUN1 : DINO_RUN2;
      drawBitmap(ctx, bmp, DINO_X, state.feetY - DINO_H, COLORS.fg);
    };

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // Clouds.
      ctx.fillStyle = COLORS.dim;
      for (const cl of state.clouds) {
        ctx.fillRect(cl.x, cl.y, 22, 4);
        ctx.fillRect(cl.x + 4, cl.y - 4, 14, 4);
        ctx.fillRect(cl.x + 2, cl.y + 4, 18, 4);
      }

      // Ground line + pebbles.
      ctx.fillStyle = COLORS.ground;
      ctx.fillRect(0, GROUND_Y + 1, W, 2);
      for (const pb of state.pebbles) ctx.fillRect(pb.x, pb.y, pb.w, 2);

      // Obstacles.
      for (const ob of state.obstacles) {
        if (ob.kind === "cactus") {
          drawCactus(ctx, ob);
        } else {
          const bmp = Math.floor(ob.frame / 6) % 2 === 0 ? BIRD1 : BIRD2;
          drawBitmap(ctx, bmp, ob.x, ob.y, COLORS.fg);
        }
      }

      drawDino();
      drawScore();

      // Overlays.
      ctx.textAlign = "center";
      if (state.phase === "idle") {
        ctx.fillStyle = COLORS.score;
        ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText("PRESS SPACE OR TAP TO PLAY", W / 2, 20);
      } else if (state.phase === "over") {
        ctx.fillStyle = COLORS.fg;
        ctx.font = "700 16px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText("G A M E   O V E R", W / 2, 40);
        ctx.fillStyle = COLORS.score;
        ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText(
          state.newHigh ? "NEW HIGH SCORE — SPACE / TAP TO RETRY" : "SPACE / TAP TO RETRY",
          W / 2,
          62,
        );
      }
      ctx.textAlign = "left";
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
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <div className="mt-10 w-full max-w-[600px] select-none">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="A dinosaur running game. Press space or tap to jump, down arrow to duck."
        className="block w-full cursor-pointer touch-none"
        style={{ imageRendering: "pixelated" }}
      />
      <p className="mt-3 text-center text-xs tracking-wide text-neutral-600">
        space / ↑ jump · ↓ duck
      </p>
    </div>
  );
}
