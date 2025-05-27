
import { useState, useCallback } from 'react';
import { Task, TaskCategory } from '../types/task';
import { useLocalStorage } from './useLocalStorage';

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Morning exercises',
    category: 'sport',
    duration: '10:00',
    completed: false,
    starred: true,
    icon: '🏃',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Play the piano',
    category: 'hobby',
    duration: '15:00',
    completed: false,
    starred: false,
    icon: '🎹',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Brainstorming',
    category: 'work',
    duration: '30m',
    completed: false,
    starred: false,
    icon: '💡',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    title: 'Calculate expenses',
    category: 'finance',
    duration: '30m',
    completed: false,
    starred: false,
    icon: '🧮',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 5,
    title: 'Taking the dog for a walk',
    category: 'personal',
    duration: '',
    completed: true,
    starred: false,
    icon: '🐕',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 6,
    title: 'Cleaning the kitchen and bathroom',
    category: 'personal',
    duration: '',
    completed: true,
    starred: false,
    icon: '🧽',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', initialTasks);

  const addTask = useCallback((title: string, category: TaskCategory, duration: string, icon: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      category,
      duration,
      completed: false,
      starred: false,
      icon,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
  }, [setTasks]);

  const updateTask = useCallback((taskId: number, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, ...updates, updatedAt: new Date().toISOString() }
        : task
    ));
  }, [setTasks]);

  const deleteTask = useCallback((taskId: number) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }, [setTasks]);

  const toggleTask = useCallback((taskId: number) => {
    updateTask(taskId, { completed: !tasks.find(t => t.id === taskId)?.completed });
  }, [tasks, updateTask]);

  const toggleStar = useCallback((taskId: number) => {
    updateTask(taskId, { starred: !tasks.find(t => t.id === taskId)?.starred });
  }, [tasks, updateTask]);

  const clearCompleted = useCallback(() => {
    setTasks(prev => prev.filter(task => !task.completed));
  }, [setTasks]);

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    toggleStar,
    clearCompleted
  };
};
