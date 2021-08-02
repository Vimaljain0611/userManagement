import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  constructor(private fb: FormBuilder, private modalService: BsModalService) {}
  addEmployeeForm: FormGroup;
  modalRef: BsModalRef;
  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  openAddEmployeeModal(): void {
    this.modalRef = this.modalService.show(AddEmployeeComponent);
  }
}
