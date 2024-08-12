import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Task, TaskViewModel } from '../entities/task';

// TODO: - Environments
const apiUrl = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class TaskDataService {
  private http = inject(HttpClient);

  // loadTaskList(
  //   status?: string,
  //   sortOrder: 'asc' | 'desc' = 'asc'
  // ): Observable<Task[]> {
  //   let params = new HttpParams()
  //     .set('_sort', 'dueDate')
  //     .set('_order', sortOrder);
  //   if (status) {
  //     params = params.set('status', status);
  //   }
  //   return this.http.get<Task[]>(`${apiUrl}/tasks`, { params });
  // }

  loadTaskList(
    title = '',
    status?: string,
    sortOrder: 'asc' | 'desc' = 'asc',
    userId?: string
  ): Observable<Task[]> {
    let params = new HttpParams()
      .set('_sort', 'dueDate')
      .set('_order', sortOrder);

    if (status) {
      params = params.set('status', status);
    }
    if (userId) {
      params = params.set('userId', userId);
    }
    // NOTE: - Is not working
    // if (title) {
    //   params = params.set('title_like', title);
    // }

    return this.http
      .get<Task[]>(`${apiUrl}/tasks`, { params })
      .pipe(
        map((items) =>
          items.filter((item) =>
            item.title.toLowerCase().includes(title.toLowerCase())
          )
        )
      );
  }

  createTask(client: TaskViewModel): Observable<Task> {
    return this.http.post<Task>(`${apiUrl}/tasks`, client);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${apiUrl}/tasks/${task.id}`, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/tasks/${id}`);
  }

  // Uncomment if needed
  /*
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Task[]>(url, {params, headers});
        */
  // }
}
