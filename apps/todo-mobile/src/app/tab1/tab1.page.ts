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
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
    ReactiveFormsModule,
  ],
})
export class Tab1Page extends ClientBaseComponent {
  private modalCtrl = inject(ModalController);
  private fb = inject(FormBuilder);

  clientForm = this.fb.group({
    name: ['', Validators.required],
    role: ['', Validators.required],
  });

  constructor() {
    super();
    addIcons({ trash, create, addCircle });
  }

  async openModal(client?: Client) {
    if (client) {
      this.clientForm.patchValue(client);
    } else {
      this.clientForm.reset();
    }
    const modal = await this.modalCtrl.create({
      component: ClientModalMobileComponent,
      componentProps: {
        title: client ? 'Edit Client' : 'Create Client',
        clientForm: this.clientForm,
        client: client || {},
      },
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data && this.clientForm.valid) {
      // Here, you can handle the received data, for example, update the client
      if (client) {
        this.editClient({ ...client, ...data });
      } else {
        console.log('dados recebidos (add): ', data);
        this.addClient({ ...data, avatar: data.role === 'client' ? 'gnome' : 'alchemist' });
      }
    }
  }
}
