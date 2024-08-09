import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, create, trash } from 'ionicons/icons';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'nx-ng-ionic-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonIcon,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonIcon,
    IonList,
    IonList,
    IonLabel,
    TitleCasePipe,
  ],
})
export class Tab1Page {
  users = [
    {
      id: 1,
      name: 'Nicolas Flamel',
      role: 'admin',
      avatar: 'Alchemist',
    },
    {
      id: 2,
      name: 'Thimbletack Pebble',
      role: 'client',
      avatar: 'Gnome',
    },
  ];

  constructor() {
    addIcons({ trash, create, addCircle });
  }

  addUser(): void {}
  editUser(a: any): void {}
  deleteUser(b: any): void {}
}
