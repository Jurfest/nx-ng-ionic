import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Client } from '../../entities/client';

export const clientActions = createActionGroup({
  source: 'Client',
  events: {
    loadClient: emptyProps(),
    loadClientSuccess: props<{ clientList: Client[] }>(),
    loadClientFailure: props<{ error: unknown }>(),
  },
});
