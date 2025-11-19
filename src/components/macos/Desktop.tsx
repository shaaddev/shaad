import React, { useState } from 'react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';
import { Window } from './Window';
import { Folder, User, Terminal, Mail, Github, Globe } from 'lucide-react';

interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  zIndex: number;
  content: React.ReactNode;
  defaultPosition?: { x: number; y: number };
}

export const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'finder',
      title: 'Finder',
      isOpen: false,
      zIndex: 0,
      defaultPosition: { x: 50, y: 50 },
      content: (
        <div className="grid grid-cols-4 gap-4">
           <div className="flex flex-col items-center gap-2 p-2 hover:bg-blue-500/10 rounded cursor-pointer">
             <Folder className="w-12 h-12 text-blue-500 fill-current" />
             <span className="text-sm">Documents</span>
           </div>
           <div className="flex flex-col items-center gap-2 p-2 hover:bg-blue-500/10 rounded cursor-pointer">
             <Folder className="w-12 h-12 text-blue-500 fill-current" />
             <span className="text-sm">Downloads</span>
           </div>
           <div className="flex flex-col items-center gap-2 p-2 hover:bg-blue-500/10 rounded cursor-pointer">
             <Folder className="w-12 h-12 text-blue-500 fill-current" />
             <span className="text-sm">Pictures</span>
           </div>
        </div>
      ),
    },
    {
      id: 'browser',
      title: 'Browser',
      isOpen: false,
      zIndex: 0,
      defaultPosition: { x: 150, y: 150 },
      content: (
        <div className="flex flex-col h-full">
            <div className="h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-2 gap-2 border-b">
                <div className="flex-1 bg-white dark:bg-black/50 rounded px-2 text-sm py-0.5">https://rashaad.dev</div>
            </div>
            <div className="flex-1 p-4 flex items-center justify-center bg-white dark:bg-[#1e1e1e]">
                <p className="text-gray-500">Browser Placeholder</p>
            </div>
        </div>
      ),
    },
    {
        id: 'github',
        title: 'GitHub',
        isOpen: false,
        zIndex: 0,
        defaultPosition: { x: 200, y: 200 },
        content: (
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <Github className="w-16 h-16" />
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    Visit my GitHub
                </a>
            </div>
        )
    },
    {
      id: 'about',
      title: 'About Me',
      isOpen: true,
      zIndex: 1,
      defaultPosition: { x: 100, y: 80 },
      content: (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Hello, I'm Rashaad</h1>
          <p className="text-lg">I'm a creative developer.</p>
          <p className="text-sm opacity-80">
            Welcome to my digital garden. I build interactive experiences and thoughtful interfaces.
          </p>
        </div>
      ),
    },
    {
      id: 'projects',
      title: 'Projects',
      isOpen: false,
      zIndex: 0,
      defaultPosition: { x: 150, y: 120 },
      content: (
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-black/5 dark:bg-white/5 rounded-lg">
            <h3 className="font-bold">Project Alpha</h3>
            <p className="text-sm">A revolutionary new way to think about things.</p>
          </div>
          <div className="p-4 bg-black/5 dark:bg-white/5 rounded-lg">
            <h3 className="font-bold">Project Beta</h3>
            <p className="text-sm">Another cool project description goes here.</p>
          </div>
        </div>
      ),
    },
    {
        id: 'contact',
        title: 'Contact',
        isOpen: false,
        zIndex: 0,
        defaultPosition: { x: 200, y: 160 },
        content: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Get in touch</h2>
                <p>Email: rashaad@example.com</p>
                <p>Twitter: @rashaad</p>
            </div>
        )
    }
  ]);

  const [maxZIndex, setMaxZIndex] = useState(2);

  const openWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
            const newZIndex = maxZIndex + 1;
            setMaxZIndex(newZIndex);
          return { ...w, isOpen: true, zIndex: newZIndex };
        }
        return w;
      })
    );
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w))
    );
  };

  const focusWindow = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: newZIndex } : w))
    );
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center font-sans">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      
      <MenuBar />
      
      <div className="relative h-full w-full p-4">
        {/* Desktop Icons */}
        <div className="flex flex-col gap-6 items-start w-24">
            <DesktopIcon icon={Folder} label="Portfolio" onClick={() => openWindow('finder')} />
            <DesktopIcon icon={User} label="About Me" onClick={() => openWindow('about')} />
            <DesktopIcon icon={Terminal} label="Projects" onClick={() => openWindow('projects')} />
            <DesktopIcon icon={Mail} label="Contact" onClick={() => openWindow('contact')} />
        </div>

        {windows.map((window) => (
          <Window
            key={window.id}
            {...window}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
          >
            {window.content}
          </Window>
        ))}
      </div>

      <Dock onAppClick={openWindow} />
    </div>
  );
};

const DesktopIcon: React.FC<{ icon: any, label: string, onClick: () => void }> = ({ icon: Icon, label, onClick }) => (
    <button onClick={onClick} className="group flex flex-col items-center gap-1 w-20 p-2 rounded hover:bg-white/20 transition-colors">
        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-200 shadow-inner backdrop-blur-sm border border-white/10">
            <Icon className="w-8 h-8 fill-current text-blue-100" />
        </div>
        <span className="text-xs font-medium text-white drop-shadow-md px-1 rounded bg-black/0 group-hover:bg-blue-600/80 transition-colors truncate max-w-full">
            {label}
        </span>
    </button>
);

