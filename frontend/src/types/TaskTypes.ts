export interface Subtask {
    id: number;
    title: string;
  }
  
  export interface Task {
    id: number;
    title: string;
    description: string;
    subtasks: Subtask[];
    status: 'Todo' | 'Doing' | 'Done';
  }
  