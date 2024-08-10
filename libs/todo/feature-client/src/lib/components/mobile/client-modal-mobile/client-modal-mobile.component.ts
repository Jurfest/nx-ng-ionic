import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonModal } from '@ionic/angular/common';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'todo-client-modal-mobile',
  templateUrl: './client-modal-mobile.component.html',
  styleUrls: ['./client-modal-mobile.component.scss'],
  imports: [
    // IonHeader,
    // IonButtons,
    // IonButton,
    // IonContent,
    // IonItem,
    // IonTitle,
    // IonToolbar,
    // IonInput,
    FormsModule,
    IonicModule,
  ],
  providers: [ModalController],
  standalone: true,
})
export class ClientModalMobileComponent {
  private modalCtrl = inject(ModalController);
  name: string | undefined;

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
