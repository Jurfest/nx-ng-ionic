import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Task, TaskViewModel } from '../../entities/task';

export const taskActions = createActionGroup({
  source: 'Task',
  events: {
    loadTask: props<{
      searchTitle: string;
      selectedStatus: string;
      selectedClient: string;
    }>(),
    loadTaskSuccess: props<{ taskList: Task[] }>(),
    loadTaskFailure: props<{ error: unknown }>(),
    addTask: props<{ task: TaskViewModel }>(),
    addTaskSuccess: props<{ task: Task }>(),
    addTaskFailure: props<{ error: unknown }>(),
    updateTask: props<{ task: Task }>(),
    updateTaskSuccess: props<{ task: Task }>(),
    updateTaskFailure: props<{ error: unknown }>(),
    deleteTask: props<{ id: string }>(),
    deleteTaskSuccess: props<{ id: string }>(),
    deleteTaskFailure: props<{ error: unknown }>(),
  },
});
