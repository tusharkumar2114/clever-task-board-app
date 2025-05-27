
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  onToggleStar: (taskId: number) => void;
  showCompleted: boolean;
  onToggleShowCompleted: () => void;
}

const TaskList = ({ 
  tasks, 
  onToggleTask, 
  onToggleStar, 
  showCompleted, 
  onToggleShowCompleted 
}: TaskListProps) => {
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-4">
      {!showCompleted && (
        <div className="space-y-3">
          {activeTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onToggleStar={onToggleStar}
            />
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="mt-6">
          <button
            onClick={onToggleShowCompleted}
            className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-700">
              Completed ({completedTasks.length})
            </span>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${showCompleted ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showCompleted && (
            <div className="mt-3 space-y-3">
              {completedTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggleTask={onToggleTask}
                  onToggleStar={onToggleStar}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;
