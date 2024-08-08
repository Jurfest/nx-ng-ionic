import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFacade } from '@nx-ng-ionic/todo/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'todo-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  private clientFacade = inject(ClientFacade);

  clientList$ = this.clientFacade.clientList$;

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.clientFacade.load();
  }
}

export default ClientComponent;
