import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppShellNoRenderDirective } from '@nx-ng-ionic/shared/util-common';

import { TabName } from '../../../models/tab-name';

@Component({
  selector: 'components-web-toggle-button',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AppShellNoRenderDirective,
  ],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {
  isHandset = input.required<boolean | null>();
  activeTab = input.required<TabName | null>();
  toggleActive = output<TabName>();

  // To use the enum values in the template
  readonly TabName = TabName;

  onToggle(tabName: TabName): void {
    this.toggleActive.emit(tabName);
  }
}
