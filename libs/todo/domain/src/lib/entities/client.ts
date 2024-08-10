export interface Client {
  id: string;
  name: string;
  role: 'admin' | 'client';
  avatar: string;
}

export interface ClientViewModel {
  name: string;
  role: 'admin' | 'client';
  avatar: string;
}
