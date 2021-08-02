import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Employee } from './employee';
import {
  UpdateEmployee,
  getEmployee,
  DeleteEmployee,
  addNewEmployee,
} from './employee.action';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { StateService } from '../../services/state.service';

export class EmployeeStateModel {
  employees: Employee[];
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    employees: [],
  },
})
@Injectable()
export class EmployeeState {
  constructor(private stateService: StateService) {}
  @Selector()
  static getEmployee(state: EmployeeStateModel) {
    return state.employees;
  }

  @Action(getEmployee)
  GetEmployee({ getState, patchState }: StateContext<EmployeeStateModel>) {
    return this.stateService.getEmployeeData().pipe(
      tap((data) => {
        const state = getState();
        patchState({
          employees: data,
        });
      })
    );
  }

  @Action(addNewEmployee)
  AddNewEmployee(
    { getState, patchState }: StateContext<EmployeeStateModel>,
    { data }: addNewEmployee
  ) {
    const state = getState();
    const employeesData = [...state.employees];
    employeesData.push(data);
    patchState({
      employees: employeesData,
    });
  }

  @Action(UpdateEmployee)
  UpdateEmployee(
    { getState, patchState }: StateContext<EmployeeStateModel>,
    { id, data }: UpdateEmployee
  ) {
    const state = getState();
    const employeesData = [...state.employees];
    const dataIndex = employeesData.findIndex((item) => item.id === id);
    employeesData[dataIndex] = data;
    patchState({
      employees: employeesData,
    });
  }
  @Action(DeleteEmployee)
  DeleteEmployee(
    { getState, patchState }: StateContext<EmployeeStateModel>,
    { id }: DeleteEmployee
  ) {
    const state = getState();
    const filteredArray = state.employees.filter((item) => item.id != id);
    patchState({
      employees: filteredArray,
    });
  }
}
