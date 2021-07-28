import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { editEmployeeComponent } from './edit-employee.component';

@NgModule({
  declarations: [editEmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [editEmployeeComponent],
})
export class EditEmployeeModule {}
