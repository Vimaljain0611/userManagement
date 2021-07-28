import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { EditEmployeeModule } from '../edit-employee/edit-employee.module';

const routes: Routes = [
  {
    path: '',
    component: GridComponent,
  },
];

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule,
    ReactiveFormsModule,
    EditEmployeeModule,
  ],
})
export class GridModule {}
