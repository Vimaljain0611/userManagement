import { Injectable } from '@angular/core';
import { userData } from './userData';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getUsersData(): userData[] {
    let data = JSON.parse(localStorage.getItem('credentialData'));
    return data ?? [];
  }
  getAuthUser(): userData[] {
    return JSON.parse(localStorage.getItem('currentLogin'));
  }

  checkLogin(userData: userData): boolean {
    const jsonData = this.getUsersData();
    let getUser = {};

    getUser = jsonData.find(
      (data) =>
        data.email == userData.email && data.password == userData.password
    );
    if (!getUser) {
      return false;
    } else {
      const data = {
        id: getUser['id'],
        email: getUser['email'],
        password: getUser['password'],
        type: getUser['type'],
      };
      localStorage.setItem('currentLogin', JSON.stringify(data));
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
  getEmail(email: string): userData {
    const jsonData = this.getUsersData();
    return jsonData.find((data) => data.email == email);
  }
  register(formData: userData, IsAdmin: boolean): void {
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
        IsAdmin: IsAdmin,
      };
      jsonData.push(data);
      localStorage.setItem('credentialData', JSON.stringify(jsonData));
    }
  }
}
