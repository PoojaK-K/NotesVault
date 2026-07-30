import React, { useState, useEffect, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { notesAPI } from '../services/api';
import { toast } from 'react-toastify';

import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import Button from '../components/Button';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = useCallback(async (query = '') => {
    try {
      setLoading(true);
      let response;
      if (query) {
        response = await notesAPI.search(query);
      } else {
        response = await notesAPI.getAll();
      }
      setNotes(response.data);
    } catch (error) {
      toast.error('Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes(searchQuery);
  }, [fetchNotes, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCreateNote = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleDeleteNote = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await notesAPI.delete(id);
        toast.success('Note deleted');
        fetchNotes(searchQuery);
      } catch (error) {
        toast.error('Failed to delete note');
      }
    }
  };

  const handleSaveNote = async (noteData) => {
    try {
      if (editingNote) {
        await notesAPI.update(editingNote.id, noteData);
        toast.success('Note updated');
      } else {
        await notesAPI.create(noteData);
        toast.success('Note created');
      }
      setIsModalOpen(false);
      fetchNotes(searchQuery);
    } catch (error) {
      toast.error(editingNote ? 'Failed to update note' : 'Failed to create note');
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center z-10 shadow-sm">
          <div className="flex-1 max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="ml-4 flex-shrink-0">
            <Button onClick={handleCreateNote} className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">New Note</span>
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <Loader />
          ) : notes.length === 0 ? (
            <EmptyState 
              title={searchQuery ? "No matching notes found" : "No notes yet"}
              description={searchQuery ? `We couldn't find any notes matching "${searchQuery}".` : "Create your first note to get started with NotesVault."}
              action={
                !searchQuery && (
                  <Button onClick={handleCreateNote} className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Create Note</span>
                  </Button>
                )
              }
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {notes.map((note) => (
                <NoteCard 
                  key={note.id} 
                  note={note} 
                  onEdit={handleEditNote} 
                  onDelete={handleDeleteNote} 
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <NoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveNote}
        initialData={editingNote}
      />
    </div>
  );
};

export default Dashboard;
