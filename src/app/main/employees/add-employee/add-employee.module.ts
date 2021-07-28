import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AddEmployeeComponent],
})
export class AddEmployeeModule {}
