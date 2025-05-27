
import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onToggleStar: (taskId: number) => void;
}

const TaskItem = ({ task, onToggleTask, onToggleStar }: TaskItemProps) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-4 transition-all hover:shadow-md ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{task.icon}</div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-gray-900 ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}>
            {task.title}
          </h3>
          {task.duration && (
            <p className="text-sm text-gray-500 mt-1">⏰ {task.duration}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggleStar(task.id)}
            className={`p-2 rounded-full transition-colors ${
              task.starred 
                ? 'text-yellow-500 hover:text-yellow-600' 
                : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            <svg className="w-5 h-5" fill={task.starred ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>

          <button
            onClick={() => onToggleTask(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              task.completed
                ? 'bg-emerald-500 border-emerald-500'
                : 'border-gray-300 hover:border-emerald-400'
            }`}
          >
            {task.completed && (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
