import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  isOpen,
  onClose,
  onFocus,
  zIndex,
  children,
  defaultPosition = { x: 100, y: 100 },
}) => {
  const windowRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ scale: 0.9, opacity: 0, x: defaultPosition.x, y: defaultPosition.y }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="absolute top-0 left-0 w-[600px] min-h-[400px] bg-[#f5f5f5] dark:bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 flex flex-col"
      style={{ zIndex }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div className="h-10 bg-[#e3e3e3] dark:bg-[#2a2a2a] border-b border-black/5 dark:border-white/5 flex items-center justify-between px-4 cursor-move"
           onPointerDown={(e) => {
               // Prevent drag on buttons
           }}
      >
        <div className="flex items-center space-x-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
          >
            <X className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group">
            <Minus className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group">
            <Maximize2 className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <div className="text-xs font-semibold text-black/70 dark:text-white/70 select-none">{title}</div>
        <div className="w-14"></div> {/* Spacer for alignment */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6 text-black dark:text-white font-sans">
        {children}
      </div>
    </motion.div>
  );
};

