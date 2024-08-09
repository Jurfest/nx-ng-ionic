import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../entities/client';

// TODO: - Environments
const apiUrl = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class ClientDataService {
  private http = inject(HttpClient);

  load(): Observable<Client[]> {
    return this.http.get<Client[]>(`${apiUrl}/clients`);
  }
}
