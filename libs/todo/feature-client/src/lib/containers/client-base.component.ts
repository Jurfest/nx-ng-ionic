import { Component, inject, OnInit } from '@angular/core';
import { Client, ClientFacade } from '@nx-ng-ionic/todo/domain';

/**
 * This component will not have its own template, as it will be inherited.
 * It is implemented as a non-abstract class for maximum code reuse.
 */

@Component({
  template: '',
})
export class ClientBaseComponent implements OnInit {
  protected clientFacade = inject(ClientFacade);

  clientList$ = this.clientFacade.clientList$;

  ngOnInit() {
    this.loadClients();
  }

  loadClients(): void {
    this.clientFacade.loadClientList();
  }

  addClient(client: Client) {
    this.clientFacade.addClient(client);
  }

  editClient(client: Client) {
    this.clientFacade.updateClient(client);
  }

  deleteClient(client: Client) {
    this.clientFacade.deleteClient(client.id);
  }
}
