import { useState } from "react";
import { motion } from "framer-motion";
import { DinoGame } from "./dino-game";

export function Details() {
  const [started, setStarted] = useState(false);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-neutral-950 text-white">
      <DinoGame onStart={() => setStarted(true)} />

      {/* Portfolio text — sits where it originally did, then clears upward on start. */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-4"
        initial={false}
        animate={started ? { y: -200, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-start justify-start">
          <h1>hello, shaad here</h1>
          <p>
            I am currently building{" "}
            <span className="underline cursor-pointer hover:no-underline transition-all ease-in-out duration-300">
              <a
                href="https://shopmasira.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={started ? "pointer-events-none" : "pointer-events-auto"}
              >
                Masira
              </a>
            </span>
          </p>
        </div>
      </motion.div>

      {/* Bottom hint — fades away once the game starts. */}
      <motion.p
        className="pointer-events-none absolute inset-x-0 bottom-8 text-center text-xs tracking-wide text-neutral-600"
        initial={false}
        animate={{ opacity: started ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        press space or tap to play · space / ↑ jump · ↓ duck · grab coins
      </motion.p>
    </section>
  );
}
