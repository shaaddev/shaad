import { useEffect, useCallback } from "react";

export function useSound(soundPath: string) {
  const play = useCallback(() => {
    const audio = new Audio(soundPath);
    audio.play().catch((err) => console.warn("Audio play failed:", err));
  }, [soundPath]);

  return play;
}
