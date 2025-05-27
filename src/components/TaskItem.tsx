
import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onToggleStar: (taskId: number) => void;
}

const TaskItem = ({ task, onToggleTask, onToggleStar }: TaskItemProps) => {
  return (
    <div className={`group bg-white border border-gray-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50 hover:-translate-y-1 ${
      task.completed ? 'opacity-60' : ''
    }`}>
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{task.icon}</div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-gray-900 text-lg leading-tight ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}>
            {task.title}
          </h3>
          {task.duration && (
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {task.duration}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onToggleStar(task.id)}
            className={`p-2 rounded-xl transition-all duration-200 ${
              task.starred 
                ? 'text-yellow-500 bg-yellow-50 hover:bg-yellow-100' 
                : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
            }`}
          >
            <svg className="w-5 h-5" fill={task.starred ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>

          <button
            onClick={() => onToggleTask(task.id)}
            className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all duration-200 ${
              task.completed
                ? 'bg-gradient-to-r from-emerald-500 to-green-500 border-emerald-500 shadow-lg shadow-emerald-500/25'
                : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50'
            }`}
          >
            {task.completed && (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
