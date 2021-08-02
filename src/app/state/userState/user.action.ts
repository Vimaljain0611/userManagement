import { UserData } from '../../models/userData';

// for authusers data
export class UpdateUser {
  static readonly type = '[UserData] UpdateUser';
  constructor(public id: string, public data: UserData) {}
}
export class getUsers {
  static readonly type = '[UserData] GetUser';
}
export class DeleteUser {
  static readonly type = '[UserData] DeleteUser';
  constructor() {}
}
