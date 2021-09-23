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
import { EmployeeService } from './services/employee.service';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { EmployeeState } from './state/employeeState/employee.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { StateService } from './services/state.service';
import { UserDataState } from './state/userState/user.state';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { EditImageModule } from './edit-image/edit-image.module';
import { D3ChartModule } from './d3/d3-chart/d3-chart.module';
import { AreaChartService } from './services/area-chart.service';
import { ExtractedEntitiesModule } from './extracted-entities/extracted-entities.module';
import { ChipsDirective } from './directives/chips.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SignupModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgxsModule.forRoot([UserDataState, EmployeeState], {
      developmentMode: !environment.production,
    }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule ,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BsDropdownModule.forRoot(),
    EditImageModule,
    D3ChartModule,
    ExtractedEntitiesModule,

  ],
  providers: [AuthService, AuthGuard, StateService, EmployeeService,AreaChartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
