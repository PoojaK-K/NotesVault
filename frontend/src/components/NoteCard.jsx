import React from 'react';
import { format } from 'date-fns';
import { Edit2, Trash2 } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  const wordCount = note.content.trim().split(/\s+/).length;
  const charCount = note.content.length;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-64 relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
        <button onClick={() => onEdit(note)} className="p-1.5 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors">
          <Edit2 className="w-4 h-4" />
        </button>
        <button onClick={() => onDelete(note.id)} className="p-1.5 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 truncate pr-16">{note.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow overflow-hidden line-clamp-6">{note.content}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
        <span>{format(new Date(note.updated_at), 'MMM d, yyyy')}</span>
        <span>{wordCount} words &middot; {charCount} chars</span>
      </div>
    </div>
  );
};

export default NoteCard;
