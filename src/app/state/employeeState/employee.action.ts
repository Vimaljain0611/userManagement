import { Employee } from './employee';

//for employee datas
export class getEmployee {
  static readonly type = '[Employee] GetEmployee';
}

export class UpdateEmployee {
  static readonly type = '[Employee] UpdateEmployee';
  constructor(public id: string, public data: Employee) {}
}

export class DeleteEmployee {
  static readonly type = '[Employee] DeleteEmployee';
  constructor(public id: string) {}
}
