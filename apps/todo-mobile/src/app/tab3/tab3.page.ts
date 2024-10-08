import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AboutComponent } from '@nx-ng-ionic/todo/feature-about';

@Component({
  selector: 'nx-ng-ionic-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    AboutComponent
  ],
})
export class Tab3Page {
  constructor() {}
}
