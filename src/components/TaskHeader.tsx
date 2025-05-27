
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
    <div className="bg-white border-b border-gray-100">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as TaskCategory)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{category.label}</span>
              <span className="text-xs">{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
