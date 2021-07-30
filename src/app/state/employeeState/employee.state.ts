import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Employee } from './employee';
import { UpdateEmployee, getEmployee, DeleteEmployee } from './employee.action';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { StateService } from '../../services/state.service';

//for employees data
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

  @Action(UpdateEmployee)
  UpdateEmployee(
    { getState, patchState }: StateContext<EmployeeStateModel>,
    { id, data }: UpdateEmployee
  ) {
    const state = getState();
    const employees = [...state.employees];
    const dataIndex = employees.findIndex((item) => item.id === id);
    employees[dataIndex] = data;
    patchState({
      employees: employees,
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
