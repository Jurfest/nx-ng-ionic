import { createReducer, on, createFeature, createSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { clientActions } from './client.actions';
import { Client } from '../../entities/client';

export interface ClientState {
  selectedId: string | number | undefined;
  loaded: boolean;
  error: unknown | undefined;
}

const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

export const initialState = adapter.getInitialState<ClientState>({
  loaded: false,
  selectedId: undefined,
  error: undefined,
});

export const clientFeature = createFeature({
  name: 'todoClient',
  reducer: createReducer(
    initialState,
    // Load
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
    })),

    // Add
    on(clientActions.addClient, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(clientActions.addClientSuccess, (state, action) =>
      adapter.addOne(action.client, { ...state, loaded: true })
    ),
    on(clientActions.addClientFailure, (state, action) => ({
      ...state,
      error: action.error,
    })),

    // Update
    on(clientActions.updateClient, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(clientActions.updateClientSuccess, (state, action) =>
      adapter.upsertOne(action.client, { ...state, loaded: true })
    ),
    on(clientActions.updateClientFailure, (state, action) => ({
      ...state,
      error: action.error,
    })),

    // Delete
    on(clientActions.deleteClient, (state) => ({
      ...state,
      loaded: false,
      error: null,
    })),
    on(clientActions.deleteClientSuccess, (state, action) =>
      adapter.removeOne(action.id, { ...state, loaded: true })
    ),
    on(clientActions.deleteClientFailure, (state, action) => ({
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
