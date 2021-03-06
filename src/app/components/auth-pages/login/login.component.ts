import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  inValidEmailPassword:boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private routes: Router
  ) {
    loginForm: FormGroup;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  userLogin(): void {
    const checkAuth = this.authService.checkLogin(this.loginForm.value);
    if (checkAuth) {
      this.routes.navigate(['/main/home']);
    } else {
      this.inValidEmailPassword = true;
    }
  }
}
