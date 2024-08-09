import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';

export interface DialogData {
  type: 'create' | 'update';
}

@Component({
  selector: 'todo-client-modal-web',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './client-modal-web.component.html',
  styleUrl: './client-modal-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientModalWebComponent {
  data: DialogData = inject(MAT_DIALOG_DATA);
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
