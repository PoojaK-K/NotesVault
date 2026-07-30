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

  return (
    <aside className="w-64 hidden md:flex flex-col border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 h-[calc(100vh-4rem)] p-4">
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || location.search === item.path.split('?')[1];
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 font-medium' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
