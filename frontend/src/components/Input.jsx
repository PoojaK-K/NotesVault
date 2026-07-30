import React from 'react';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>}
      <input
        ref={ref}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-shadow bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
        ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
