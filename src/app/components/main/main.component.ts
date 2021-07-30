import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/userData';
import { getUsers } from 'src/app/state/userState/user.action';
import { UserDataState } from 'src/app/state/userState/user.state';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store, private authService: AuthService) {
    this.store.dispatch(new getUsers());
  }
  @Select(UserDataState.getUsers) users: Observable<UserData[]>;

  ngOnInit(): void {
    let items;
    this.users.subscribe((val) => (items = val));
    this.authService.authentication.next(items);
  }
}
