import { createReducer, on, createFeature, createSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { clientActions } from './client.actions';
import { Client } from '../../entities/client';

export interface TransientState {
  selectedId: string | number | undefined;
  loaded: boolean;
  error: unknown | undefined;
}

const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

export const initialState = adapter.getInitialState<TransientState>({
  loaded: false,
  selectedId: undefined,
  error: undefined,
});

export const clientFeature = createFeature({
  name: 'todoClient',
  reducer: createReducer(
    initialState,
    on(clientActions.loadClient, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(clientActions.loadClientSuccess, (state, action) =>
      adapter.upsertMany(action.clientList, { ...state, loaded: true })
    ),
    on(clientActions.loadClientFailure, (state, action) => ({
      ...state,
      error: action.error,
    }))
  ),
  extraSelectors: (
    { selectTodoClientState, selectSelectedId },
    selectors = adapter.getSelectors(selectTodoClientState)
  ) => ({
    selectAll: selectors.selectAll,
    selectSelected: createSelector(
      selectors.selectAll,
      selectSelectedId,
      (all, id) => all.find((e) => e.id === id)
    ),
  }),
});
