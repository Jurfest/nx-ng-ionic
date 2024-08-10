import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Client, ClientViewModel } from '../../entities/client';

export const clientActions = createActionGroup({
  source: 'Client',
  events: {
    loadClient: emptyProps(),
    loadClientSuccess: props<{ clientList: Client[] }>(),
    loadClientFailure: props<{ error: unknown }>(),
    addClient: props<{ client: ClientViewModel }>(),
    addClientSuccess: props<{ client: Client }>(),
    addClientFailure: props<{ error: unknown }>(),
    updateClient: props<{ client: Client }>(),
    updateClientSuccess: props<{ client: Client }>(),
    updateClientFailure: props<{ error: unknown }>(),
    deleteClient: props<{ id: string }>(),
    deleteClientSuccess: props<{ id: string }>(),
    deleteClientFailure: props<{ error: unknown }>(),
  },
});
