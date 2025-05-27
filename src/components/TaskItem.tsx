
import React from 'react';
import { Task } from '../types/task';
import { Star, Trash2, Clock } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onToggleStar: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskItem = ({ task, onToggleTask, onToggleStar, onDeleteTask }: TaskItemProps) => {
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
          <div className="flex items-center mt-2 space-x-4">
            {task.duration && (
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {task.duration}
              </div>
            )}
            <div className="text-xs text-gray-400 capitalize">
              {task.category}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggleStar(task.id)}
            className={`p-2 rounded-xl transition-all duration-200 ${
              task.starred 
                ? 'text-yellow-500 bg-yellow-50 hover:bg-yellow-100' 
                : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
            }`}
          >
            <Star className="w-5 h-5" fill={task.starred ? 'currentColor' : 'none'} />
          </button>

          <button
            onClick={() => onDeleteTask(task.id)}
            className="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Trash2 className="w-4 h-4" />
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
