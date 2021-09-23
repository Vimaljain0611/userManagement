import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthService } from '../../../app/services/auth.service';
import { LeftSideBarModule } from './left-side-bar/left-side-bar.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main.component';
import { UserDataState } from './../../state/userState/user.state';
import { of } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        CommonModule,
        LeftSideBarModule,
        RouterModule,
        NgxsModule.forRoot(),
        RouterTestingModule,
        BrowserModule,
      ],

      providers: [AuthService, Store],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('ngOnInit', () => {
    it('check observable returns value', () => {
      let items;
      let user = [
        {
          name: 'raj',
          id: '112',
          email: 'vj@sjs',
          contact: '788789',
          password: '12345',
        },
        {
          name: 'raj',
          id: '112',
          email: 'vj@sjs',
          contact: '788789',
          password: '12345',
        },
        {
          name: 'raj',
          id: '112',
          email: 'vj@sjs',
          contact: '788789',
          password: '12345',
        },
      ];
      Object.defineProperty(component, 'users', { writable: true });
      component.users = of(user);
      component.users.subscribe((val) => (items = val));

      component.ngOnInit();
      expect(items).toBe(user);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
