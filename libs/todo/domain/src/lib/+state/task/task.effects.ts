import { inject, Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { taskActions } from './task.actions';
import { TaskDataService } from '../../infrastructure/task.data.service';

@Injectable()
export class TaskEffects {
  private actions$ = inject(Actions);
  private taskDataService = inject(TaskDataService);

  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.loadTask),
      switchMap((/* action */) =>
        this.taskDataService.loadTaskList().pipe(
          map((taskList) => taskActions.loadTaskSuccess({ taskList })),
          catchError((error) => of(taskActions.loadTaskFailure({ error })))
        ))
    )
  );
}
