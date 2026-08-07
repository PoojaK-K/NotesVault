import React from 'react';
import { Home, Star, Pin, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'All Notes', path: '/dashboard' },
    { icon: Pin, label: 'Pinned', path: '/dashboard?filter=pinned' },
    { icon: Star, label: 'Favorites', path: '/dashboard?filter=favorites' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const isActiveLink = (item) => {
    return location.pathname + location.search === item.path;
  };

  return (
    <aside className="w-64 hidden md:flex flex-col border-r border-gray-200/50 dark:border-gray-800/50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md h-[calc(100vh-4rem)] p-4 relative z-10">
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = isActiveLink(item);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-400 font-semibold shadow-sm border border-blue-200/50 dark:border-blue-500/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:translate-x-1'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
