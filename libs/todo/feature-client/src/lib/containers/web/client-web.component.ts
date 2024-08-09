import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '@nx-ng-ionic/shared/ui-components';

import { ClientBaseComponent } from '../client-base.component';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'todo-client-web',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatIconModule, ReactiveFormsModule, TitleCasePipe],
  templateUrl: './client-web.component.html',
  styleUrl: './client-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientWebComponent extends ClientBaseComponent {
  private fb = inject(FormBuilder);

  clientForm = this.fb.group({
    name: [''],
    role: [''],
  });
}

export default ClientWebComponent;
