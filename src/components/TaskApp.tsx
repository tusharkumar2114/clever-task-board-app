
import React, { useState, useMemo } from 'react';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';
import TaskStats from './TaskStats';
import AddTaskButton from './AddTaskButton';
import SearchBar from './SearchBar';
import { TaskCategory, TaskFilters } from '../types/task';
import { useTasks } from '../hooks/useTasks';
import { useToast } from '@/hooks/use-toast';

const TaskApp = () => {
  const { tasks, addTask, toggleTask, toggleStar, deleteTask, clearCompleted } = useTasks();
  const { toast } = useToast();
  
  const [filters, setFilters] = useState<TaskFilters>({
    category: 'all',
    showCompleted: false,
    searchQuery: ''
  });

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // Filter by category
      if (filters.category !== 'all' && task.category !== filters.category) return false;
      
      // Filter by completion status
      if (filters.showCompleted && !task.completed) return false;
      if (!filters.showCompleted && task.completed) return false;
      
      // Filter by search query
      if (filters.searchQuery && !task.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
      
      return true;
    });
  }, [tasks, filters]);

  const activeTasks = useMemo(() => tasks.filter(task => !task.completed), [tasks]);
  const completedTasks = useMemo(() => tasks.filter(task => task.completed), [tasks]);

  const handleAddTask = (title: string, category: TaskCategory, duration: string, icon: string) => {
    addTask(title, category, duration, icon);
    toast({
      title: "Task added!",
      description: `"${title}" has been added to your tasks.`,
    });
  };

  const handleDeleteTask = (taskId: number) => {
    const task = tasks.find(t => t.id === taskId);
    deleteTask(taskId);
    toast({
      title: "Task deleted",
      description: `"${task?.title}" has been removed.`,
    });
  };

  const handleClearCompleted = () => {
    const count = completedTasks.length;
    clearCompleted();
    toast({
      title: "Tasks cleared",
      description: `${count} completed tasks have been removed.`,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
      <TaskHeader 
        activeCategory={filters.category}
        setActiveCategory={(category) => setFilters(prev => ({ ...prev, category }))}
        onClearCompleted={handleClearCompleted}
        completedCount={completedTasks.length}
      />
      
      <div className="p-6 space-y-6 pb-24">
        <TaskStats 
          activeTasks={activeTasks.length}
          completedTasks={completedTasks.length}
        />
        
        <SearchBar 
          searchQuery={filters.searchQuery}
          onSearchChange={(searchQuery) => setFilters(prev => ({ ...prev, searchQuery }))}
        />
        
        <TaskList 
          tasks={filteredTasks}
          allTasks={tasks}
          onToggleTask={toggleTask}
          onToggleStar={toggleStar}
          onDeleteTask={handleDeleteTask}
          showCompleted={filters.showCompleted}
          onToggleShowCompleted={() => setFilters(prev => ({ ...prev, showCompleted: !prev.showCompleted }))}
        />
      </div>

      <AddTaskButton onAddTask={handleAddTask} />
    </div>
  );
};

export default TaskApp;
