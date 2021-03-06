import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { TableModule } from '../../../../table/table.module';
import { PaginationModule } from '../../../../pagination/pagination.module';
import { EditEmployeeModule } from '../edit-employee/edit-employee.module';
import { DeleteModalModule } from '../delete-modal/delete-modal.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
    BsDropdownModule.forRoot()
  ],
})
export class ListModule {}
