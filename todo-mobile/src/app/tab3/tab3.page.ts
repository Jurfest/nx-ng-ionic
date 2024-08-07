import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'nx-ng-ionic-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 3 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <nx-ng-ionic-explore-container
        name="Tab 3 page"
      ></nx-ng-ionic-explore-container>
    </ion-content>
  `,
  styles: ``,
})
export class Tab3Page {
  constructor() {}
}
