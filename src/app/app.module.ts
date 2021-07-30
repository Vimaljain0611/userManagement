import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { HeaderModule } from './components/header/header.module';
import { SignupModule } from './components/auth-pages/signup/signup.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { EmployeeState } from './state/employeeState/employee.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { StateService } from './services/state.service';
import { UserDataState } from './state/userState/user.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SignupModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    NgxsModule.forRoot([UserDataState, EmployeeState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [AuthService, AuthGuard, StateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
