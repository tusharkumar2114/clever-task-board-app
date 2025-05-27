
import React, { useState } from 'react';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';
import TaskStats from './TaskStats';
import AddTaskButton from './AddTaskButton';
import { Task, TaskCategory } from '../types/task';

const TaskApp = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Morning exercises',
      category: 'sport',
      duration: '10:00',
      completed: false,
      starred: true,
      icon: '🏃'
    },
    {
      id: 2,
      title: 'Play the piano',
      category: 'hobby',
      duration: '15:00',
      completed: false,
      starred: false,
      icon: '🎹'
    },
    {
      id: 3,
      title: 'Brainstorming',
      category: 'work',
      duration: '30m',
      completed: false,
      starred: false,
      icon: '💡'
    },
    {
      id: 4,
      title: 'Calculate expenses',
      category: 'finance',
      duration: '30m',
      completed: false,
      starred: false,
      icon: '🧮'
    },
    {
      id: 5,
      title: 'Taking the dog for a walk',
      category: 'personal',
      duration: '',
      completed: true,
      starred: false,
      icon: '🐕'
    },
    {
      id: 6,
      title: 'Cleaning the kitchen and bathroom',
      category: 'personal',
      duration: '',
      completed: true,
      starred: false,
      icon: '🧽'
    }
  ]);

  const [activeCategory, setActiveCategory] = useState<TaskCategory>('all');
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleStar = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, starred: !task.starred } : task
    ));
  };

  const addTask = (title: string, category: TaskCategory, duration: string, icon: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      category,
      duration,
      completed: false,
      starred: false,
      icon
    };
    setTasks([newTask, ...tasks]);
  };

  const filteredTasks = tasks.filter(task => {
    if (activeCategory !== 'all' && task.category !== activeCategory) return false;
    if (showCompleted) return task.completed;
    return true;
  });

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
      <TaskHeader 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <div className="p-4 space-y-4">
        <TaskStats 
          activeTasks={activeTasks.length}
          completedTasks={completedTasks.length}
        />
        
        <TaskList 
          tasks={showCompleted ? completedTasks : activeTasks}
          onToggleTask={toggleTask}
          onToggleStar={toggleStar}
          showCompleted={showCompleted}
          onToggleShowCompleted={() => setShowCompleted(!showCompleted)}
        />
      </div>

      <AddTaskButton onAddTask={addTask} />
    </div>
  );
};

export default TaskApp;
