import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Mail, Github, Globe, Folder } from 'lucide-react';

interface DockProps {
  onAppClick: (appId: string) => void;
}

export const Dock: React.FC<DockProps> = ({ onAppClick }) => {
  const apps = [
    { id: 'finder', icon: Folder, name: 'Finder', color: 'bg-blue-500' },
    { id: 'about', icon: User, name: 'About Me', color: 'bg-gray-500' },
    { id: 'projects', icon: Terminal, name: 'Projects', color: 'bg-black' },
    { id: 'contact', icon: Mail, name: 'Contact', color: 'bg-green-500' },
    { id: 'browser', icon: Globe, name: 'Browser', color: 'bg-blue-400' },
    { id: 'github', icon: Github, name: 'GitHub', color: 'bg-purple-600' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-2 flex items-end gap-2 shadow-2xl">
        {apps.map((app) => (
          <DockItem key={app.id} app={app} onClick={() => onAppClick(app.id)} />
        ))}
      </div>
    </div>
  );
};

interface DockItemProps {
  app: any;
  onClick: () => void;
}

const DockItem: React.FC<DockItemProps> = ({ app, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.2, y: -10 }}
      whileTap={{ scale: 0.9 }}
      className="relative group flex flex-col items-center justify-center"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center text-white shadow-lg`}>
        <app.icon className="w-8 h-8" />
      </div>
      {isHovered && (
        <div className="absolute -top-10 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/10">
          {app.name}
        </div>
      )}
      <div className="w-1 h-1 bg-black/50 dark:bg-white/50 rounded-full mt-1 opacity-0 group-active:opacity-100" />
    </motion.button>
  );
};

