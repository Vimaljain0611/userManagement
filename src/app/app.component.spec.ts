import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './components/auth-pages/signup/signup.module';
import { HeaderModule } from './components/header/header.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,RouterModule.forChild([]),BrowserModule,
      AppRoutingModule,
      HeaderModule,
      SignupModule,
      BrowserAnimationsModule,
      ModalModule.forRoot(),NgxsReduxDevtoolsPluginModule.forRoot(),
      BsDropdownModule.forRoot()],
      declarations: [AppComponent],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'userManagement'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('userManagement');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'userManagement app is running!'
    );
  });
});
