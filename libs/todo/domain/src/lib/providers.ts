import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ClientEffects } from './+state/client/client.effects';
import { clientFeature } from './+state/client/client.reducer';
import { TaskEffects } from './+state/task/task.effects';
import { taskFeature } from './+state/task/task.reducer';

export function provideTodoDomain() {
  // prettier-ignore
  return [
    provideState(clientFeature),
    provideEffects([ClientEffects]),

    provideState(taskFeature),
    provideEffects([TaskEffects]),
];
}
