import { Breakpoints } from '@angular/cdk/layout';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '@nx-ng-ionic/shared/ui-components';
import { Client, ClientViewModel } from '@nx-ng-ionic/todo/domain';
import { filter, map, shareReplay, take, tap } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

import { ClientModalWebComponent } from '../../components/modal/client-modal-web.component';
import { ClientBaseComponent } from '../client-base.component';
import { IonLabel, IonListHeader } from "@ionic/angular/standalone";
import { AppShellNoRenderDirective } from '@nx-ng-ionic/shared/util-common';

@Component({
  selector: 'todo-client-web',
  standalone: true,
  imports: [
    IonListHeader,
    IonLabel,
    CommonModule,
    ButtonComponent,
    MatIconModule,
    ReactiveFormsModule,
    TitleCasePipe,
    MatButtonModule,
    ClientModalWebComponent,
    AppShellNoRenderDirective,
  ],
  templateUrl: './client-web.component.html',
  styleUrl: './client-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientWebComponent extends ClientBaseComponent {
  private fb = inject(FormBuilder);
  private breakpointObserver = inject(BreakpointObserver);
  readonly dialog = inject(MatDialog);

  clientForm = this.fb.group({
    name: ['', Validators.required],
    role: ['', Validators.required],
  });

  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

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
