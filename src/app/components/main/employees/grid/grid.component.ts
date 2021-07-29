import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { editEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  openEditEmployeeModal() {
    this.modalRef = this.modalService.show(editEmployeeComponent);
  }

  deleteUser(id) {}
}
