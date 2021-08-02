import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public bsModalRef: BsModalRef
  ) {}

  signUpForm: FormGroup;
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  getControls():any {
    return this.signUpForm.controls;
  }
  register(): void {
    this.authService.register(this.signUpForm.value, false);
  }
}
