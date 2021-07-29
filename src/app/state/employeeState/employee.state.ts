import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Employee } from './employee';
import {
  UpdateEmployee,
  getEmployee,
  DeleteEmployee
} from './employee.action';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { StateService } from '../../services/state.service';

//for employees data
export class EmployeeStateModel {
  employee: Employee[];
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    employee: [],
  },
})
@Injectable()
export class EmployeeState {
  constructor(private stateService: StateService) {}
  @Selector()
  static getEmployee(state: EmployeeStateModel) {
    return state.employee;
  }

  @Action(getEmployee)
  GetEmployee({ getState, setState }: StateContext<EmployeeStateModel>) {
    return this.stateService.getEmployeeData().pipe(
      tap((data) => {
        const state = getState();
        setState({
          employee: data,
        });
      })
    );
  }

  @Action(UpdateEmployee)
  UpdateEmployee({ getState, patchState }: StateContext<EmployeeStateModel>,{ id, data }: UpdateEmployee) {
    const state = getState();
    const employees = [...state.employee];
    const dataIndex = employees.findIndex((item) => item.id === id);
    employees[dataIndex] = data;
    patchState({
      employee: employees,
    });
  }
  @Action(DeleteEmployee)
  DeleteEmployee({getState,patchState}: StateContext<EmployeeStateModel>, {id}: DeleteEmployee){
    const state = getState();
    const filteredArray = state.employee.filter(item => item.id !== id);
    patchState({
      employee: filteredArray,
    });
  }
}
