import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../auth-pages/signup/signup.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  viewSignUpButton;
  modalRef: BsModalRef;
  btnTitle;
  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.authService.authentication.subscribe((val) => {
      if (val) {
        this.viewSignUpButton = false;
        this.btnTitle = val['isAdmin'] ? 'Admin' : 'User';
      } else {
        this.viewSignUpButton = true;
      }
    });
  }

  openModal() :void{
    this.modalRef = this.modalService.show(SignupComponent);
  }

  signOut():void {
    this.authService.authentication.next({});
    this.authService.removeAuthUser();
    this.viewSignUpButton = true;
    this.routes.navigate(['/login']);
  }
}
