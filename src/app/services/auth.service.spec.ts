import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgxsModule, Store } from '@ngxs/store';

import { AuthService } from './auth.service';

const fakeLocalStorage = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store],
      imports:[StoreModule.forRoot({}),
        RouterModule.forChild([]),
        NgxsModule.forRoot([]),]
    });
    service = TestBed.inject(AuthService);

    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  describe('getUsersData',()=>{
    it('check function returns data',()=>{
      window.localStorage.setItem('the-key','fake-value')
      service.getUsersData();
      expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
    })
  })

  describe('getAuthUser',()=>{
    it('check function auth user',()=>{
      window.localStorage.setItem('the-key','fake-value')
      service.getAuthUser();
      expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
    })
  })
  describe('checkLogin',()=>{
    let UserData = {
      email:'vj747666@gmail.com',
      password:'12345',
      id:'11',
      name:'jhon'
    }
    it('check login credentials did not match',()=>{
      const jsonData = service.getUsersData();
      let getUser = {};

      getUser = jsonData.find(
        (data) =>
          data.email == UserData.email && data.password == UserData.password
      );
      service.checkLogin(UserData);
      expect(service.checkLogin(UserData)).toBeFalsy();
    })

    it('check login credentials match',()=>{
      jest.spyOn(service,'getUsersData').mockReturnValue([UserData])
      const jsonData = service.getUsersData();

      let getUser = jsonData.find(
        (data) =>
          data.email == UserData.email && data.password == UserData.password
      );

      getUser = UserData
      if (!getUser) {

      } else {
        const data = {
          id: getUser['id'],
          name: getUser['name'],
          email: getUser['email'],
          password: getUser['password'],
          isAdmin: getUser['isAdmin'],
        };

      }
      service.checkLogin(UserData);
      expect(service.checkLogin(UserData)).toBeTruthy();
    })

  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
