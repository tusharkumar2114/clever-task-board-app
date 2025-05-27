
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
    <div className="space-y-5">
      {!showCompleted && (
        <div className="space-y-4">
          {activeTasks.length > 0 ? (
            activeTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
                onToggleStar={onToggleStar}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All tasks completed!</h3>
              <p className="text-gray-500">Great job! Take a well-deserved break.</p>
            </div>
          )}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="mt-8">
          <button
            onClick={onToggleShowCompleted}
            className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Completed Tasks</span>
                <div className="text-sm text-gray-500">{completedTasks.length} tasks done</div>
              </div>
            </div>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                showCompleted ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showCompleted && (
            <div className="mt-4 space-y-4 animate-fade-in">
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
