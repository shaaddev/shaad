import React from "react";
import { useTime } from "../../hooks/use-time";
import { Apple, Battery, Wifi, Search, Command } from "lucide-react";

export const MenuBar: React.FC = () => {
  const time = useTime();

  const formatTime = (date: Date) => {
    return date
      .toLocaleTimeString("en-US", {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/,/g, "");
  };

  return (
    <div className="h-8 bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-white/20 dark:border-white/10 flex items-center justify-between px-4 text-xs font-medium text-black dark:text-white select-none z-50 relative w-full">
      <div className="flex items-center space-x-4">
        <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
          <Apple className="w-4 h-4 fill-current" />
        </button>
        <span className="font-bold">Portfolio</span>
        <div className="hidden sm:flex space-x-4">
          <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
            File
          </button>
          <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
            Edit
          </button>
          <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
            View
          </button>
          <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
            Go
          </button>
          <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
            Window
          </button>
          <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
            Help
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
          <Battery className="w-4 h-4" />
        </button>
        <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
          <Wifi className="w-4 h-4" />
        </button>
        <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
          <Search className="w-4 h-4" />
        </button>
        <button className="hover:bg-white/30 dark:hover:bg-white/20 rounded px-2 py-0.5 transition-colors">
          <Command className="w-4 h-4" />
        </button>
        <span className="px-2">{formatTime(time)}</span>
      </div>
    </div>
  );
};
