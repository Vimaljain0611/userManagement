import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class editEmployeeComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef) {}

  editUserForm: FormGroup;
  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      fullName: ['', Validators.required],
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

  updateUser() {}
}
