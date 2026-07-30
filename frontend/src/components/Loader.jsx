import React from 'react';

const Loader = ({ fullScreen = false }) => {
  const content = (
    <div className="flex justify-center items-center h-full w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (fullScreen) {
    return <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50 flex justify-center items-center">{content}</div>;
  }

  return content;
};

export default Loader;
