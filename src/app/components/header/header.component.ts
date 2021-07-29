import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { SignupComponent } from '../auth-pages/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewSignUpButton = new BehaviorSubject('');
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {}
  openModal() {
    this.modalRef = this.modalService.show(SignupComponent);
  }
}
