import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Task, TaskViewModel } from '../entities/task';

// TODO: - Environments
const apiUrl = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class TaskDataService {
  private http = inject(HttpClient);

  loadTaskList(
    searchTitle = '',
    selectedStatus = '',
    selectedClient = '',
    sortOrder: 'asc' | 'desc' = 'asc'
  ): Observable<Task[]> {
    let params = new HttpParams()
      .set('_sort', 'dueDate')
      .set('_order', sortOrder);

    // NOTE: - Filter done i client side to not over add params to json-server
    // if (selectedStatus) {
    //   params = params.set('status', selectedStatus);
    // }
    if (selectedClient) {
      params = params.set('userId', selectedClient);
    }
    // NOTE: - Is not working - this filter is made in client side
    // if (title) {
    //   params = params.set('title_like', title);
    // }

    console.log('params: ', params)

    return this.http.get<Task[]>(`${apiUrl}/tasks`, { params }).pipe(
      // Filter by title
      map((items) =>
        items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            item.status.toLowerCase().includes(selectedStatus.toLowerCase())
        )
      )
      //
      // map((res) =>
      //   res.filter(
      //     (game) =>
      //       game.title.toLowerCase().includes(searchParam.toLowerCase()) ||
      //       game.year.includes(searchParam) ||
      //       game.dateOfCompletion.includes(searchParam)
      //   )
      // ),
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
}
