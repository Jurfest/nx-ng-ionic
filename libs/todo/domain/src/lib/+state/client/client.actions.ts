import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Client } from '../../entities/client';

export const clientActions = createActionGroup({
  source: 'Client',
  events: {
    loadClient: emptyProps(),
    loadClientSuccess: props<{ clientList: Client[] }>(),
    loadClientFailure: props<{ error: unknown }>(),
    addClient: props<{ client: Client }>(),
    addClientSuccess: props<{ client: Client }>(),
    addClientFailure: props<{ error: unknown }>(),
    updateClient: props<{ client: Client }>(),
    updateClientSuccess: props<{ client: Client }>(),
    updateClientFailure: props<{ error: unknown }>(),
    deleteClient: props<{ id: number }>(),
    deleteClientSuccess: props<{ id: number }>(),
    deleteClientFailure: props<{ error: unknown }>(),
  },
});
