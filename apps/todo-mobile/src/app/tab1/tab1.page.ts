import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  ClientBaseComponent,
  ClientModalMobileComponent,
} from '@nx-ng-ionic/todo/feature-client';
import { addIcons } from 'ionicons';
import { addCircle, create, trash } from 'ionicons/icons';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Client } from '@nx-ng-ionic/todo/domain';

@Component({
  selector: 'nx-ng-ionic-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    ExploreContainerComponent,
    IonicModule,
    TitleCasePipe,
    AsyncPipe,
    ClientModalMobileComponent,
  ],
})
export class Tab1Page extends ClientBaseComponent {
  message =
    'This modal example uses the modalController to present and dismiss modals.';

  private modalCtrl = inject(ModalController);

  constructor() {
    super();
    addIcons({ trash, create, addCircle });
  }

  async openModal(client?: Client) {
    const modal = await this.modalCtrl.create({
      component: ClientModalMobileComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}

//

// //
// ngOnInit(): void {
//     this.loadClients();
//   }

//   protected loadClients(): void {
//     this.clientFacade.loadClientList();
//   }

//   protected addClient(client: ClientViewModel): void {
//     this.clientFacade.addClient(client);
//   }

//   protected editClient(client: Client): void {
//     this.clientFacade.updateClient(client);
//   }

//   protected deleteClient(client: Client): void {
//     this.clientFacade.deleteClient(client.id);
//   }
