
import React from 'react';

interface TaskStatsProps {
  activeTasks: number;
  completedTasks: number;
}

const TaskStats = ({ activeTasks, completedTasks }: TaskStatsProps) => {
  return (
    <div className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-500/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Today's Progress</h2>
          <p className="text-emerald-100 text-sm">Keep up the great work!</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{activeTasks}</div>
            <div className="text-emerald-100 text-sm">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{completedTasks}</div>
            <div className="text-emerald-100 text-sm">Done</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-3xl font-bold">
            {Math.round((completedTasks / (activeTasks + completedTasks)) * 100) || 0}%
          </div>
          <div className="text-emerald-100 text-sm">Complete</div>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
