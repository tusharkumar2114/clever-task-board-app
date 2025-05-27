
import React from 'react';
import { TaskCategory } from '../types/task';

interface TaskHeaderProps {
  activeCategory: TaskCategory;
  setActiveCategory: (category: TaskCategory) => void;
}

const categories = [
  { id: 'all', label: 'All', count: 7 },
  { id: 'sport', label: 'Sport', count: 1 },
  { id: 'reading', label: 'Reading', count: 2 },
  { id: 'work', label: 'Work', count: 1 },
  { id: 'hobby', label: 'Hobby', count: 1 },
  { id: 'personal', label: 'Personal', count: 2 }
];

const TaskHeader = ({ activeCategory, setActiveCategory }: TaskHeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-50 sticky top-0 z-10 backdrop-blur-md bg-white/95">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button className="p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Tasks</h1>
          <button className="p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as TaskCategory)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
