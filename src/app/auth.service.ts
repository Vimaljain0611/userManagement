import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCredentialData(): [{ [key: string]: string }] {
    let data = JSON.parse(localStorage.getItem('credentialData'));
    return data ?? [];
  }
  getCredentials(): [{ [key: string]: string }] {
    let data = JSON.parse(localStorage.getItem('currentLogin'));
    return data ?? [];
  }

  checkLogin(userData: { [key: string]: string }): boolean {
    const jsonData = this.getCredentialData();
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
  uudId(): string {
    return 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      let r = (Math.random() * 6) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(6);
    });
  }
  getEmail(email: string): { [key: string]: string } {
    const jsonData = this.getCredentialData();
    return jsonData.find((data) => data.email == email);
  }
  register(formData: { [key: string]: string },type:string)
  {
    const getMail = this.getEmail(formData.email);
    if (getMail) {
      alert('Email id already exist !!');
    } else {
      const jsonData = this.getCredentialData();
      const data = {
        id: this.uudId(),
        email: formData.email,
        password: formData.password,
        type:type
      };
      jsonData.push(data);
      localStorage.setItem('credentialData', JSON.stringify(jsonData));
    }

  }
}
