
import React from 'react';

interface TaskStatsProps {
  activeTasks: number;
  completedTasks: number;
}

const TaskStats = ({ activeTasks, completedTasks }: TaskStatsProps) => {
  return (
    <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl p-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-1">Feature of the week!</h2>
          <p className="text-emerald-100 text-sm">Tasks have become more efficient</p>
        </div>
        <button className="text-white/80 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <button className="mt-3 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
        Learn more
      </button>
    </div>
  );
};

export default TaskStats;
