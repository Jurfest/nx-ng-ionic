export interface Client {
  id: number;
  name: string;
  role: 'admin' | 'client';
  avatar: string;
}
