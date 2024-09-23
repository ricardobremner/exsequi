export type Task = {
  id: string;
  task: string;
  date: string;
  status: string;
};

export interface UpdateTaskProps {
  id: string;
  updateTask: (task: Task) => void;
};

export interface DeleteProps {
  id: string;
  deleteTask: (id: string) => void;
};

export interface TaskstatProps {
  tasks: Task[];
};

export interface FormProps {
  editTask: Task | null;
  updateTask: (task: Task) => void;
  addTask: (task: Task) => void;
};

export interface TaskTableProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
};