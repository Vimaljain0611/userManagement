import { Injectable, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { DeleteModalComponent } from '../components/main/employees/delete-modal/delete-modal.component';
import { editEmployeeComponent } from '../components/main/employees/edit-employee/edit-employee.component';
import { getEmployee } from '../state/employeeState/employee.action';
import { EmployeeState } from '../state/employeeState/employee.state';
import { Employee } from './../state/employeeState/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService implements OnInit {
  constructor(private store: Store, private modalService: BsModalService) {}
  ngOnInit() {
    this.store.dispatch(new getEmployee());
  }
  @Select(EmployeeState.getEmployee) employee: Observable<Employee[]>;

  getEmployeeById(id:string): Employee {
    let employeesData: Employee[];
    this.employee.subscribe((val) => {
      employeesData = val;
    });
    return employeesData.find((val) => val.id == id);
  }
  openEditEmployeeModal(id:any): void {
    const employeeData = this.getEmployeeById(id);
    const initialState = {
      id: id,
      employeeData: employeeData,
    };
    this.modalService.show(editEmployeeComponent, { initialState });
  }
  openDeleteEmployeeModal(id:any): void {
    const initialState = {
      id: id,
    };
    this.modalService.show(DeleteModalComponent, { initialState });
  }

  getPageCount(totalRecords: number, pagesize: number): number {
    let totalPage = 0;
    if (totalRecords > 0 && pagesize > 0) {
      const pageCount = totalRecords / pagesize;
      const roundedPageCount = Math.floor(pageCount);
      totalPage =
        roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }
    return totalPage;
  }
}
