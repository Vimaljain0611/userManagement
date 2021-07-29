import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { RouterModule, Routes } from '@angular/router';
import { GridModule } from './grid/grid.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddEmployeeModule } from './add-employee/add-employee.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      { path: '', redirectTo: 'grid', pathMatch: 'full' },
      {
        path: 'grid',
        loadChildren: () =>
          import('./grid/grid.module').then((m) => m.GridModule),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule),
      },
    ],
  },
];

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ModalModule,
    AddEmployeeModule,
  ],
})
export class EmployeesModule {}
