import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../../services/auth.service';
import { Store } from '@ngxs/store';
import { addNewEmployee } from '../../../../state/employeeState/employee.action';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    public fb: FormBuilder,
    public bsModalRef: BsModalRef,
    public authService: AuthService,
    public store: Store
  ) {}
  addEmployeeForm: FormGroup;
  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      contact: ['', Validators.required],
    });
  }
  addEmployee(): void {
    const form = this.addEmployeeForm.value;
    const dataObject = {
      id: this.authService.uudId(),
      name: form.name,
      email: form.email,
      contact: form.contact,
    };
    console.log( this.authService.uudId())
    this.store.dispatch(new addNewEmployee(dataObject));
  }
}
