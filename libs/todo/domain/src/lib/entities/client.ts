export interface Client {
  id: number;
  name: string;
  role: 'admin' | 'client';
  avatar: string;
}

export interface ClientViewModel {
  name: string;
  role: 'admin' | 'client';
  avatar: string;
}
