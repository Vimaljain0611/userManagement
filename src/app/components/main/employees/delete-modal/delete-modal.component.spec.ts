import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { AddEmployeeModule } from '../add-employee/add-employee.module';

import { DeleteModalComponent } from './delete-modal.component';

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture<DeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteModalComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        ModalModule,
        FormsModule,
        AddEmployeeModule,
        NgxsModule.forRoot([])
      ],
      providers:[BsModalRef,Store]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('deleteEmployee',()=>{
    it('check for store action dispatch',()=>{
      jest.spyOn(component.store, 'dispatch');
      component.deleteEmployee('11111');
      expect(component.store.dispatch).toBeCalled( );
    })
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
