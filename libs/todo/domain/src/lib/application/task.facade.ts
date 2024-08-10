import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { taskActions } from '../+state/task/task.actions';
import { taskFeature } from '../+state/task/task.reducer';

@Injectable({ providedIn: 'root' })
export class TaskFacade {
  private store = inject(Store);

  loaded$ = this.store.pipe(select(taskFeature.selectLoaded));
  taskList$ = this.store.pipe(select(taskFeature.selectAll));
  selectedTask$ = this.store.pipe(select(taskFeature.selectSelected));

  loadTaskList(): void {
    this.store.dispatch(taskActions.loadTask());
  }

  deleteTask(id: string): void {
    this.store.dispatch(taskActions.deleteTask({ id }));
  }
}
