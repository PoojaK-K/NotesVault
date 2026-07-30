import React from 'react';
import { FileText } from 'lucide-react';

const EmptyState = ({ title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 w-full max-w-md mx-auto my-8">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full mb-4">
        <FileText className="w-12 h-12 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
