import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserData } from '../../models/userData';

import {
  UpdateUser,
  getUsers,
  DeleteUser
} from './user.action';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { StateService } from '../../services/state.service';


//state for users data
export class UserDataStateModel {
  usersData: UserData[];
}
@State<UserDataStateModel>({
  name: 'usersData',
  defaults: {
    usersData: [],
  },
})

@Injectable()
export class UserDataState {
  constructor(private stateService: StateService) {}
  @Selector()
  static getUsers(state: UserDataStateModel) {
    return state.usersData;
  }

  @Action(getUsers)
  GetUser({ getState, patchState }: StateContext<UserDataStateModel>) {
    return this.stateService.getUsersData().pipe(
      tap((result) => {
        const state = getState();
        patchState({
          usersData: result,
        });
      })
    );
  }

  @Action(UpdateUser)
  UpdateUser({ getState, patchState }: StateContext<UserDataStateModel>,{ id, data }: UpdateUser) {
    const state = getState();
    const users = [...state.usersData];
    const dataIndex = users.findIndex((item) => item.id === id);
    users[dataIndex] = data;
    patchState({
      usersData: users,
    });
  }
  @Action(DeleteUser)
  DeleteUser({getState,patchState}: StateContext<UserDataStateModel>){
    const state = getState();
    patchState({
      usersData: null,
    });
  }
}
