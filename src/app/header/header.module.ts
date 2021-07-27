import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupModule } from '../signup/signup.module';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  declarations: [HeaderComponent,SignupComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    SignupModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
