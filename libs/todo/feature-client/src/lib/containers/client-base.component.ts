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

  ngOnInit(): void {
    this.loadClients();
  }

  protected loadClients(): void {
    this.clientFacade.loadClientList();
  }

  protected addClient(client: Client): void {
    this.clientFacade.addClient(client);
  }

  protected editClient(client: Client): void {
    this.clientFacade.updateClient(client);
  }

  protected deleteClient(client: Client): void {
    this.clientFacade.deleteClient(client.id);
  }
}
