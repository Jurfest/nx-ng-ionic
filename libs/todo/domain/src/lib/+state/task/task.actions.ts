import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Task } from '../../entities/task';

export const taskActions = createActionGroup({
  source: 'Task',
  events: {
    loadTask: emptyProps(),
    loadTaskSuccess: props<{ taskList: Task[] }>(),
    loadTaskFailure: props<{ error: unknown }>(),
    deleteTask: props<{ id: string }>(),
    deleteTaskSuccess: props<{ id: string }>(),
    deleteTaskFailure: props<{ error: unknown }>(),
  },
});
