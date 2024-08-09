import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '@nx-ng-ionic/shared/ui-components';

import { ClientBaseComponent } from '../client-base.component';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ClientModalWebComponent } from '../../components/modal/client-modal-web.component';
import { filter, take, tap } from 'rxjs';

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
    name: [''],
    role: [''],
  });

  openDialog(type: 'create' | 'update'): void {
    const dialogRef = this.dialog.open(ClientModalWebComponent, {
      data: {
        type,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result),
        tap((result) => {
          // if (type === 'update') {
          //   this.editClient(result);
          // } else {
          //   this.addClient(result);
          // }
        })
      )
      .subscribe();
  }
}

export default ClientWebComponent;
