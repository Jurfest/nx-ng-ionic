import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '@nx-ng-ionic/shared/ui-components';

import { ClientBaseComponent } from '../client-base.component';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ClientModalWebComponent } from '../../components/modal/client-modal-web.component';
import { filter, take, tap } from 'rxjs';
import { Client, ClientViewModel } from '@nx-ng-ionic/todo/domain';

@Component({
  selector: 'todo-client-web',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MatIconModule,
    ReactiveFormsModule,
    TitleCasePipe,
    MatButtonModule,
    ClientModalWebComponent,
  ],
  templateUrl: './client-web.component.html',
  styleUrl: './client-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientWebComponent extends ClientBaseComponent {
  private fb = inject(FormBuilder);
  readonly dialog = inject(MatDialog);

  clientForm = this.fb.group({
    name: ['', Validators.required],
    role: ['', Validators.required],
  });

  openDialog(type: 'create' | 'update', client?: Client): void {
    this.clientForm.patchValue({
      name: client?.name || '',
      role: client?.role || '',
    });
    const dialogRef = this.dialog.open(ClientModalWebComponent, {
      data: {
        type,
        clientModalForm: this.clientForm,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result),
        tap(() => {
          if (client) {
            const newClient: Client = {
              name: this.clientForm.controls.name.value ?? '',
              role:
                this.clientForm.controls.role.value === 'admin'
                  ? 'admin'
                  : 'client',
              avatar:
                this.clientForm.controls.role.value === 'admin'
                  ? 'alchemist'
                  : 'gnome',
              id: client.id,
            };
            this.editClient(newClient);
          } else {
            const newClient: ClientViewModel = {
              name: this.clientForm.controls.name.value ?? '',
              role:
                this.clientForm.controls.role.value === 'admin'
                  ? 'admin'
                  : 'client',
              avatar:
                this.clientForm.controls.role.value === 'admin'
                  ? 'alchemist'
                  : 'gnome',
            };
            this.addClient(newClient);
          }
        })
      )
      .subscribe();
  }
}

export default ClientWebComponent;
