import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  viewDashboard = new BehaviorSubject(this.authService.getCredentials());

  constructor( private fb: FormBuilder,
    private authService: AuthService,
    private route:Router) {

  }
  signUpForm: FormGroup;
  ngOnInit(): void {

    this.signUpForm = this.fb.group(
      {
        fullName :['',Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
    );
  }
  register(): void {
    this.authService.register(this.signUpForm.value,'user');
  }


}
