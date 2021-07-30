import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { TableModule } from 'src/app/table/table.module';
import { PaginationModule } from 'src/app/pagination/pagination.module';
import { EditEmployeeModule } from '../edit-employee/edit-employee.module';
import { DeleteModalModule } from '../delete-modal/delete-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    PaginationModule,
    EditEmployeeModule,
    DeleteModalModule,
  ],
})
export class ListModule {}
