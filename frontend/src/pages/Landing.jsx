import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Shield, Zap, Sparkles } from 'lucide-react';

const Landing = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized for speed. Your notes load instantly, every single time."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Secure by Design",
      description: "End-to-end encryption ensures your thoughts remain yours alone."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: "Organized Chaos",
      description: "Powerful search and organization tools to tame your knowledge base."
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
      <div className="text-center max-w-4xl mx-auto z-10 pt-20 pb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-8 font-medium text-sm animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>The next generation note-taking app</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Your thoughts, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">securely vaulted.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Capture ideas, organize your life, and boost your productivity with NotesVault. Beautifully designed for clarity.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Get Started for Free
          </Link>
          <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-bold text-lg shadow border border-gray-200 dark:border-gray-700 transition-all">
            Login to your vault
          </Link>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="bg-gray-50 dark:bg-gray-700/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

    </div>
  );
};

export default Landing;
