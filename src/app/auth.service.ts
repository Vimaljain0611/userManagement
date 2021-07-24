import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getData(): [{ [key: string]: string }] {
    let data = JSON.parse(localStorage.getItem('credentialData'));
    return data ?? [];
  }

  checkLogin(userData: { [key: string]: string }): boolean {
    const jsonData = this.getData();
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
        type:getUser['type']
      };
      localStorage.setItem('currentLogin', JSON.stringify(data));
      return true;
    }
  }
}
