import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Notebook, LogOut, Sun, Moon } from 'lucide-react';
import Button from './Button';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06] bg-white/95 dark:bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-2">
            <Notebook className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">NotesVault</span>
          </Link>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:block">
                  Hi, {user?.username}
                </span>
                <Button variant="ghost" onClick={logout} className="flex items-center space-x-2 text-sm px-3">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" className="text-sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
