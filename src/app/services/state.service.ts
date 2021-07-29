import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from '../models/userData';
import { Employee } from '../state/employeeState/employee';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  getUsersData(): Observable<UserData[]> {
    let data = JSON.parse(localStorage.getItem('UsersData'));
    return of(data ?? []);
  }

  getEmployeeData(): Observable<Employee[]> {
    let data = JSON.parse(localStorage.getItem('EmployeesData'));
    return of(data ?? []);
  }
}

