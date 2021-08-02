import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getEmployee } from './../../../../state/employeeState/employee.action';
import { Observable } from 'rxjs';
import { EmployeeState } from 'src/app/state/employeeState/employee.state';
import { Employee } from 'src/app/state/employeeState/employee';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from 'src/app/services/employee.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //pagination
  activePage: number = 1;
  totalRecords: number = 0;
  pagesize: number = 5;
  totalPageCount: Number;

  //data
  tableHeadData = ['SrNo', 'Name', 'Email', 'Contact', 'Id', 'Action'];
  dataToDisplay;

  modalRef: BsModalRef;
  constructor(
    private store: Store,
    private employeeService: EmployeeService,
    private ref: ChangeDetectorRef
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

  displayActivePage(activePageNumber: number): void {
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
    let employeesData:Employee[];
    this.employee.subscribe((val) => {
      this.totalRecords = val.length;
      employeesData = val;
      const lastIndex = this.activePage * this.pagesize;
      const firstIndex = (this.activePage - 1) * this.pagesize;
      this.dataToDisplay = employeesData.slice(firstIndex, lastIndex);
    });
  }

  private getPageCount(): number {
    return this.employeeService.getPageCount(this.totalRecords,this.pagesize);
  }
  openEditEmployeeModal(id:number): void {
    this.employeeService.openEditEmployeeModal(id);
  }
  openDeleteEmployeeModal(id:number): void {
    this.employeeService.openDeleteEmployeeModal(id);
  }
}
