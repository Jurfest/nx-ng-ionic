import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { clientActions } from '../+state/client/client.actions';
import { clientFeature } from '../+state/client/client.reducer';

@Injectable({ providedIn: 'root' })
export class ClientFacade {
  private store = inject(Store);

  loaded$ = this.store.pipe(select(clientFeature.selectLoaded));
  clientList$ = this.store.pipe(select(clientFeature.selectAll));
  selectedClient$ = this.store.pipe(select(clientFeature.selectSelected));

  load(): void {
    this.store.dispatch(clientActions.loadClient());
  }
}
