import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteEmployee } from 'src/app/state/employeeState/employee.action';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  id: string;
  modalRef: BsModalRef;
  constructor(public bsModalRef: BsModalRef, private store: Store) {}

  ngOnInit(): void {}
  deleteEmployee(id) {
    this.store.dispatch(new DeleteEmployee(id));
  }
}
