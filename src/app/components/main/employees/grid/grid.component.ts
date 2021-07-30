import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { getEmployee } from 'src/app/state/employeeState/employee.action';
import { EmployeeState } from 'src/app/state/employeeState/employee.state';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { editEmployeeComponent } from '../edit-employee/edit-employee.component';
import { Employee } from './../../../../state/employeeState/employee';

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
  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
    this.totalPageCount = this.getPageCount();
    this.pagination();
  }
  constructor(private modalService: BsModalService, private store: Store) {}
  @Select(EmployeeState.getEmployee) employee: Observable<Employee[]>;

  ngOnInit(): void {
    this.store.dispatch(new getEmployee());
    this.totalPageCount = this.getPageCount();
    this.pagination();
  }

  private getPageCount(): number {
    let totalPage = 0;
    if (this.totalRecords > 0 && this.pagesize > 0) {
      const pageCount = this.totalRecords / this.pagesize;
      const roundedPageCount = Math.floor(pageCount);
      totalPage =
        roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }
    return totalPage;
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
    });
    const lastIndex = this.activePage * this.pagesize;
    const firstIndex = (this.activePage - 1) * this.pagesize;
    this.dataToDisplay = this.employeesData.slice(firstIndex, lastIndex);
  }

  openEditEmployeeModal(id): void {
    this.modalRef = this.modalService.show(editEmployeeComponent);
  }

  openDeleteEmployeeModal(id): void {
    const initialState = {
      id: id,
    };
    this.modalService.show(DeleteModalComponent, { initialState });
  }
}
