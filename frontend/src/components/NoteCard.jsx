import React from 'react';
import { format } from 'date-fns';
import { Edit2, Trash2, Pin, Star } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete, onTogglePin, onToggleFav }) => {
  const wordCount = note.content.trim().split(/\s+/).length;
  const charCount = note.content.length;
  const isPinned = note.is_pinned;
  const isFav = note.is_favorite;

  return (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-64 relative overflow-hidden hover:-translate-y-1">
      {/* Subtle Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex space-x-2">
          <button onClick={() => onEdit(note)} className="p-2 text-gray-500 hover:text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-sm transition-all hover:scale-105">
            <Edit2 className="w-4 h-4" />
          </button>
          <button onClick={() => onDelete(note.id)} className="p-2 text-gray-500 hover:text-red-600 bg-white hover:bg-red-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-sm transition-all hover:scale-105">
            <Trash2 className="w-4 h-4" />
          </button>
          <button onClick={() => onTogglePin(note)} className={`p-2 ${isPinned ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'} bg-white ${isPinned ? 'bg-indigo-50' : 'hover:bg-indigo-50'} dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-sm transition-all hover:scale-105`}>
            <Pin className="w-4 h-4" />
          </button>
          <button onClick={() => onToggleFav(note)} className={`p-2 ${isFav ? 'text-yellow-600' : 'text-gray-500 hover:text-yellow-600'} bg-white ${isFav ? 'bg-yellow-50' : 'hover:bg-yellow-50'} dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-sm transition-all hover:scale-105`}>
            <Star className="w-4 h-4" />
          </button>
        </div>
      
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 truncate pr-20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{note.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow overflow-hidden line-clamp-6 leading-relaxed">{note.content}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex justify-between items-center text-xs text-gray-400 dark:text-gray-500 font-medium">
        <span>{format(new Date(note.updated_at), 'MMM d, yyyy')}</span>
        <span>{wordCount} words &middot; {charCount} chars</span>
      </div>
    </div>
  );
};

export default NoteCard;
