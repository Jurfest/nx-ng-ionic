import { Component, inject, Input, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  NavParams,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonFooter,
} from '@ionic/angular/standalone';
import { Client } from '@nx-ng-ionic/todo/domain';

@Component({
  selector: 'todo-client-modal-mobile',
  templateUrl: './client-modal-mobile.component.html',
  styleUrls: ['./client-modal-mobile.component.scss'],
  imports: [
    IonFooter,
    IonLabel,
    IonHeader,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonTitle,
    IonToolbar,
    IonInput,
    FormsModule,
    ReactiveFormsModule,
    IonSelect,
    IonSelectOption,
  ],
  providers: [ModalController],
  standalone: true,
})
export class ClientModalMobileComponent {
  private modalCtrl = inject(ModalController);
  // NOTE - ctx.title is not a function - Ionic template does not work with input signals
  // title = input.required<string>();
  // clientForm = input.required<FormGroup>();
  @Input() title!: string;
  @Input() clientForm!: FormGroup;

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.clientForm.value, 'confirm');
  }
}
