import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable, of } from 'rxjs';
import { UserData } from '../models/userData';
import { Employee } from '../state/employeeState/employee';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private store: Store) {}
  getUsersData(): Observable<UserData[]> {
    let data = JSON.parse(localStorage.getItem('AuthUser'));
    return of(data ?? []);
  }

  getEmployeeData(): Observable<Employee[]> {
    let data = JSON.parse(localStorage.getItem('EmployeesData'));
    return of(data ?? []);
  }
}
