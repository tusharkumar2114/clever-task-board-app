
import React, { useState } from 'react';
import { TaskCategory } from '../types/task';

interface AddTaskButtonProps {
  onAddTask: (title: string, category: TaskCategory, duration: string, icon: string) => void;
}

const AddTaskButton = ({ onAddTask }: AddTaskButtonProps) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TaskCategory>('personal');
  const [duration, setDuration] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('📝');

  const icons = ['📝', '💼', '🏃', '📚', '🎨', '🍳', '🧹', '💰', '🎵', '🌱'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), category, duration, selectedIcon);
      setTitle('');
      setDuration('');
      setSelectedIcon('📝');
      setShowForm(false);
    }
  };

  if (showForm) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center p-4 z-50">
        <div className="bg-white rounded-t-3xl w-full max-w-md p-6 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Add New Task</h3>
            <button 
              onClick={() => setShowForm(false)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Choose an icon
              </label>
              <div className="grid grid-cols-5 gap-3">
                {icons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setSelectedIcon(icon)}
                    className={`p-3 text-2xl rounded-2xl border-2 transition-all duration-200 ${
                      selectedIcon === icon 
                        ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/25 scale-110' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Task title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 transition-all"
                placeholder="Enter task title..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as TaskCategory)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 bg-white"
                >
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="sport">Sport</option>
                  <option value="hobby">Hobby</option>
                  <option value="reading">Reading</option>
                  <option value="finance">Finance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Duration
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500"
                  placeholder="30m"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowForm(true)}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white p-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30"
    >
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
};

export default AddTaskButton;
