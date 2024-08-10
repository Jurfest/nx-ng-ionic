import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../entities/task';

// TODO: - Environments
const apiUrl = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class TaskDataService {
  private http = inject(HttpClient);

  loadTaskList(): Observable<Task[]> {
    return this.http.get<Task[]>(`${apiUrl}/tasks`);
  }

  // load(): Observable<Task[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Task[]>(url, {params, headers});
        */
  // }
}
