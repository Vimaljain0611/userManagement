import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('open edit modal', () => {
    it('should open employee edit modal', () => {
      jest.spyOn(component.openEditEmployeeModal, 'emit');
      component.openEditEmployeeModal.emit(2222);
      component.openEditModal(2222);
      expect(component.openEditEmployeeModal.emit).toHaveBeenCalledWith(2222);
    });
  });

  describe('openDeleteEmployeeModal', () => {
    it('should open employee delete modal', () => {
      jest.spyOn(component.openDeleteEmployeeModal, 'emit');
      component.openDeleteEmployeeModal.emit(2222);
      component.deleteModal(2222);
      expect(component.openDeleteEmployeeModal.emit).toHaveBeenCalledWith(2222);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
