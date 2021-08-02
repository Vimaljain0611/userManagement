import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataToDisplay;
  @Input() theadData;
  @Output() openEditEmployeeModal: EventEmitter<number> = new EventEmitter();
  @Output() openDeleteEmployeeModal: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.dataToDisplay;
    this.theadData;
  }

  openEditModal(id:number): void {
    this.openEditEmployeeModal.emit(id);
  }
  deleteModal(id:number): void {
    this.openDeleteEmployeeModal.emit(id);
  }
}
