
export type TaskCategory = 'all' | 'sport' | 'reading' | 'work' | 'hobby' | 'personal' | 'finance';

export interface Task {
  id: number;
  title: string;
  category: TaskCategory;
  duration: string;
  completed: boolean;
  starred: boolean;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFilters {
  category: TaskCategory;
  showCompleted: boolean;
  searchQuery: string;
}
