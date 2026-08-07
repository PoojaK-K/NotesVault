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
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 overflow-hidden bg-white dark:bg-gray-950">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 animate-gradient"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/40 dark:bg-purple-800/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-300/40 dark:bg-blue-800/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto z-10 pt-20 pb-16">
        <div className="inline-flex items-center space-x-2 glass text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full mb-8 font-medium text-sm animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span>The next generation note-taking app</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Your thoughts, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">securely vaulted.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Capture ideas, organize your life, and boost your productivity with NotesVault. Beautifully designed for clarity.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40 transition-all hover:-translate-y-1">
            Get Started for Free
          </Link>
          <Link to="/login" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/80 dark:hover:bg-gray-800/80 text-gray-900 dark:text-white rounded-full font-bold text-lg transition-all hover:-translate-y-1">
            Login to your vault
          </Link>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {features.map((feature, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="bg-white/50 dark:bg-gray-800/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Landing;
