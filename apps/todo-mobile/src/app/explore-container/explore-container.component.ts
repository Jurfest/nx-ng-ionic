import { Component, input } from '@angular/core';

@Component({
  selector: 'nx-ng-ionic-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
})
export class ExploreContainerComponent {
  name = input<string>()
}
