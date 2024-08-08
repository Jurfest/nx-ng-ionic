import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ClientEffects } from './+state/client/client.effects';
import { clientFeature } from './+state/client/client.reducer';

export function provideTodoDomain() {
  // prettier-ignore
  return [
    provideState(clientFeature),
    provideEffects([ClientEffects]),
];
}
