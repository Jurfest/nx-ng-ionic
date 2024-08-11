import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

export interface DialogData {
  type: 'create' | 'update';
  taskForm: FormGroup;
}

@Component({
  selector: 'todo-client-modal-web',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './task-modal-web.component.html',
  styleUrl: './task-modal-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskModalWebComponent {
  readonly dialogRef = inject(MatDialogRef<TaskModalWebComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
