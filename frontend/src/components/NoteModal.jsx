import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import Input from './Input';

const NoteModal = ({ isOpen, onClose, onSave, initialData = null }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setTitle(initialData.title);
        setContent(initialData.content);
      } else {
        setTitle('');
        setContent('');
      }
      setErrors({});
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!content.trim()) newErrors.content = 'Content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ title, content });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {initialData ? 'Edit Note' : 'Create Note'}
          </h2>
          <button onClick={onClose} className="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto flex-grow flex flex-col space-y-4">
          <Input 
            placeholder="Note Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            error={errors.title}
            className="text-lg font-medium"
          />
          <div className="flex-grow flex flex-col">
            <textarea
              placeholder="Write your note content here..."
              className={`w-full flex-grow min-h-[300px] p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
                errors.content ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
              }`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-end space-x-3 bg-gray-50 dark:bg-gray-900/50">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save Note</Button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
