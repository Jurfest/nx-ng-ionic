import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client, ClientViewModel } from '../entities/client';

// TODO: - Environments
const apiUrl = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class ClientDataService {
  private http = inject(HttpClient);

  loadCLients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${apiUrl}/clients`);
  }

  createClient(client: ClientViewModel): Observable<Client> {
    return this.http.post<Client>(`${apiUrl}/clients`, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${apiUrl}/clients/${client.id}`, client);
  }

  deleteCLient(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/clients/${id}`);
  }
}
