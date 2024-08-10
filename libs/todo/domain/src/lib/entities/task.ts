export interface Task {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'done';
  userId?: string;
}
