import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ClientBaseComponent } from '../client-base.component';

@Component({
  selector: 'todo-client-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-web.component.html',
  styleUrl: './client-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientWebComponent extends ClientBaseComponent {}

export default ClientWebComponent;
