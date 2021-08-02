import { Employee } from './employee';

export class getEmployee {
  static readonly type = '[Employee] GetEmployee';
}

export class addNewEmployee {
  static readonly type = '[Employee] AddNewEmployee';
  constructor(public data: Employee) {}
}
export class UpdateEmployee {
  static readonly type = '[Employee] UpdateEmployee';
  constructor(public id: string, public data: Employee) {}
}

export class DeleteEmployee {
  static readonly type = '[Employee] DeleteEmployee';
  constructor(public id: string) {}
}
