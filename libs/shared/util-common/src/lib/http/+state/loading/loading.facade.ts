import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

import { LoadingActions } from './loading.actions';
import { loadingFeature } from './loading.reducer';

@Injectable({ providedIn: 'root' })
export class LoadingFacade {
  private readonly store = inject(Store);

  isLoading$ = this.store.pipe(select(loadingFeature.selectLoading));

  start(): string {
    const requestId = uuidv4();
    this.store.dispatch(LoadingActions.loadStart({ requestId }));
    return requestId;
  }

  stop(requestId: string): void {
    this.store.dispatch(LoadingActions.loadStop({ requestId }));
  }
}
