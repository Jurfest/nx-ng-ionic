import { createReducer, on, createFeature, createSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { taskActions } from './task.actions';
import { Task } from '../../entities/task';

export interface TransientState {
  selectedId: string | number | undefined;
  loaded: boolean;
  error: unknown | undefined;
}

const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState = adapter.getInitialState<TransientState>({
  loaded: false,
  selectedId: undefined,
  error: undefined,
});

export const taskFeature = createFeature({
  name: 'todoTask',
  reducer: createReducer(
    initialState,
    on(taskActions.loadTask, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(taskActions.loadTaskSuccess, (state, action) =>
      adapter.upsertMany(action.taskList, { ...state, loaded: true })
    ),
    on(taskActions.loadTaskFailure, (state, action) => ({
      ...state,
      error: action.error,
    })),

    // Delete
    on(taskActions.deleteTask, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(taskActions.deleteTaskSuccess, (state, action) =>
      adapter.removeOne(action.id, { ...state, loaded: true })
    ),
    on(taskActions.deleteTaskFailure, (state, action) => ({
      ...state,
      error: action.error,
    }))
  ),
  extraSelectors: (
    { selectTodoTaskState, selectSelectedId },
    selectors = adapter.getSelectors(selectTodoTaskState)
  ) => ({
    selectAll: selectors.selectAll,
    selectSelected: createSelector(
      selectors.selectAll,
      selectSelectedId,
      (all, id) => all.find((e) => e.id === id)
    ),
  }),
});
