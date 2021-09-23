import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserData } from '../../models/userData';
import { getUsers } from '../../state/userState/user.action';
import { UserDataState } from './../../state/userState/user.state';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store, private authService: AuthService) {
  }
  @Select(UserDataState.getUsers) users: Observable<UserData[]>;

  ngOnInit(): void {
    this.store.dispatch(new getUsers());
    let items;
    this.users.subscribe((val) => (items = val));
    this.authService.authentication.next(items);
  }
}
