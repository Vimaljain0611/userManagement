import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { getEmployee } from '../../../../state/employeeState/employee.action';
import { EmployeeState } from '../../../../state/employeeState/employee.state';
import { Employee } from './../../../../state/employeeState/employee';
import { EmployeeService } from '../../../../services/employee.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  modalRef: BsModalRef;
  activePage: number = 1;
  totalRecords: number = 0;
  pagesize: number = 5;
  employeesData: Employee[];
  dataToDisplay: Employee[];
  totalPageCount: number;

  constructor(
    public store: Store,
    public employeeService: EmployeeService,
    public ref: ChangeDetectorRef
  ) {}
  @Select(EmployeeState.getEmployee) employee: Observable<Employee[]>;

  ngOnInit(): void {
    this.store.dispatch(new getEmployee());
    this.totalPageCount = this.getPageCount();
    this.pagination();
  }
  ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }
  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
    this.totalPageCount = this.getPageCount();
    this.pagination();
  }

  ChangePageSize(size, pageNo): void {
    this.pagesize = size;
    this.activePage = pageNo;
    this.totalPageCount = this.getPageCount();
    this.pagination();
  }

  pagination(): void {
    this.employee.subscribe((val) => {
      this.totalRecords = val.length;
      this.employeesData = val;
      const lastIndex = this.activePage * this.pagesize;
      const firstIndex = (this.activePage - 1) * this.pagesize;
      this.dataToDisplay = this.employeesData.slice(firstIndex, lastIndex);
    });
  }
  getPageCount(): number {
    return this.employeeService.getPageCount(this.totalRecords, this.pagesize);
  }

  openEditEmployeeModal(id: string): void {
    this.employeeService.openEditEmployeeModal(id);
  }

  openDeleteEmployeeModal(id: string): void {
    this.employeeService.openDeleteEmployeeModal(id);
  }
}
