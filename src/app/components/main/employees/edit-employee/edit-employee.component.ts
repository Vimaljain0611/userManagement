import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from 'src/app/state/employeeState/employee';
import { Store } from '@ngxs/store';
import { UpdateEmployee } from 'src/app/state/employeeState/employee.action';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class editEmployeeComponent implements OnInit {
  modalRef: BsModalRef;
  id: string;
  employeeData: Employee;
  constructor(
    private fb: FormBuilder,
    public bsModalRef: BsModalRef,
    private store: Store
  ) {}

  editUserForm: FormGroup;
  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      name: [this.employeeData.name, Validators.required],
      email: [
        this.employeeData.email,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      contact: [this.employeeData.contact, Validators.required],
    });
  }

  updateUser(id:string) : void {
    const FormData = this.editUserForm.value;
    const data = {
      id: id,
      name: FormData.name,
      email: FormData.email,
      contact: FormData.contact,
    };
    this.store.dispatch(new UpdateEmployee(id, data));
  }
}
