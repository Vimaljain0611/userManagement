import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../models/userData';
import { Store } from '@ngxs/store';
import { DeleteUser } from './../state/userState/user.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public store: Store) {}

  authentication = new BehaviorSubject({});

  getUsersData(): UserData[] {
    let data = JSON.parse(localStorage.getItem('UsersData'));
    return data ?? [];
  }
  getAuthUser(): UserData[] {
    return JSON.parse(localStorage.getItem('AuthUser'));
  }

  checkLogin(UserData: UserData): boolean {
    const jsonData = this.getUsersData();
    let getUser = {};

    getUser = jsonData.find(
      (data) =>
        data.email == UserData.email && data.password == UserData.password
    );
    if (!getUser) {
      return false;
    } else {
      const data = {
        id: getUser['id'],
        name: getUser['name'],
        email: getUser['email'],
        password: getUser['password'],
        isAdmin: getUser['isAdmin'],
      };
      localStorage.setItem('AuthUser', JSON.stringify(data));
      return true;
    }
  }
  uudId(): string {
    return 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      let r = (Math.random() * 6) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(6);
    });
  }
  getEmail(email: string): UserData {
    const jsonData = this.getUsersData();
    return jsonData.find((data) => data.email == email);
  }
  register(formData: UserData, isAdmin: boolean): void {
    const getMail = this.getEmail(formData.email);
    if (getMail) {
      alert('Email id already exist !!');
    } else {
      const jsonData = this.getUsersData();
      const data = {
        id: this.uudId(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        isAdmin: isAdmin,
      };
      jsonData.push(data);
      localStorage.setItem('UsersData', JSON.stringify(jsonData));
    }
  }

  removeAuthUser(): void {
    this.store.dispatch(new DeleteUser());
    localStorage.removeItem('AuthUser');
  }
}
