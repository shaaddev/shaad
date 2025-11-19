import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  Terminal,
  User,
  Mail,
  Github,
  Globe,
  Folder,
  Trash,
} from "lucide-react";

interface DockProps {
  onAppClick: (appId: string) => void;
  openApps: string[];
}

export const Dock: React.FC<DockProps> = ({ onAppClick, openApps }) => {
  const mouseX = useMotionValue(Infinity);

  const apps = [
    { id: "finder", icon: Folder, name: "Finder", color: "bg-blue-500" },
    { id: "browser", icon: Globe, name: "Browser", color: "bg-blue-400" },
    { id: "projects", icon: Terminal, name: "Projects", color: "bg-zinc-800" },
    { id: "github", icon: Github, name: "GitHub", color: "bg-purple-600" },
    { id: "about", icon: User, name: "About Me", color: "bg-gray-500" },
    { id: "contact", icon: Mail, name: "Contact", color: "bg-green-500" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl px-4 pb-3 pt-3 flex items-end gap-3 shadow-2xl h-[4rem] box-content"
      >
        {apps.map((app) => (
          <DockItem
            key={app.id}
            mouseX={mouseX}
            app={app}
            isOpen={openApps.includes(app.id)}
            onClick={() => onAppClick(app.id)}
          />
        ))}

        <div className="w-[1px] h-10 bg-white/10 dark:bg-white/20 self-center mx-1" />

        {/* Trash/Downloads Section - Treated as Dock Items for consistency */}
        <DockItem
          mouseX={mouseX}
          app={{
            id: "trash",
            icon: Trash,
            name: "Trash",
            color: "bg-transparent border border-white/10",
          }}
          isOpen={false}
          onClick={() => {}} // Trash logic
        />
      </motion.div>
    </div>
  );
};

interface DockItemProps {
  mouseX: MotionValue;
  app: any;
  isOpen: boolean;
  onClick: () => void;
}

const DockItem: React.FC<DockItemProps> = ({
  mouseX,
  app,
  isOpen,
  onClick,
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-1 relative group">
      {isHovered && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm border border-black/5 dark:border-white/10 shadow-sm font-medium whitespace-nowrap z-50 animate-in fade-in zoom-in duration-200 pointer-events-none">
          {app.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-200 dark:bg-gray-800 rotate-45" />
        </div>
      )}

      <motion.button
        ref={ref}
        style={{ width, height: width }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.85 }}
        className={`rounded-2xl ${app.color} flex items-center justify-center text-white shadow-lg relative z-10 aspect-square ring-1 ring-inset ring-black/5 dark:ring-white/10 overflow-hidden`}
      >
        {/* Special handling for Trash to have a different look if needed, but keeping consistent for now */}
        {app.id === "trash" ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-zinc-700 to-zinc-800">
            <div className="w-full h-full bg-white/5 absolute inset-0" />
            <Trash className="w-1/2 h-1/2 text-white/80" />
          </div>
        ) : (
          <>
            <app.icon className="w-1/2 h-1/2 drop-shadow-md relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          </>
        )}
      </motion.button>

      <div
        className={`w-1 h-1 rounded-full bg-black/40 dark:bg-white/40 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
    </div>
  );
};
