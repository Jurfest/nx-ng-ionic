import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { clientActions } from '../+state/client/client.actions';
import { clientFeature } from '../+state/client/client.reducer';
import { Client } from '../entities/client';

@Injectable({ providedIn: 'root' })
export class ClientFacade {
  private store = inject(Store);

  loaded$ = this.store.pipe(select(clientFeature.selectLoaded));
  clientList$ = this.store.pipe(select(clientFeature.selectAll));
  selectedClient$ = this.store.pipe(select(clientFeature.selectSelected));

  loadClientList(): void {
    this.store.dispatch(clientActions.loadClient());
  }

  addClient(client: Client): void {
    this.store.dispatch(clientActions.addClient({ client }));
  }

  updateClient(client: Client): void {
    this.store.dispatch(clientActions.updateClient({ client }));
  }

  deleteClient(id: number): void {
    this.store.dispatch(clientActions.deleteClient({ id }));
  }
}
