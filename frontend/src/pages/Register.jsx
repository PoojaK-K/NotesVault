import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import { Notebook } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await register({ username, email, password });
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Notebook className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input 
              label="Username" 
              type="text" 
              required 
              minLength={3}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input 
              label="Email address" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              label="Password" 
              type="password" 
              required 
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div>
              <Button type="submit" className="w-full flex justify-center py-2.5" disabled={loading}>
                {loading ? 'Creating account...' : 'Sign up'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
