import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { addNewEmployee } from '../../../../state/employeeState/employee.action';
import { AuthService } from '../../../../../app/services/auth.service';

import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule,NgxsModule.forRoot()],
      providers:[BsModalRef,Store,AuthService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit',()=>{
    it('check form is not undefined',()=>{
      component.ngOnInit();
      expect(component.addEmployeeForm).toBeDefined();
    })
  })

  describe('addEmployee',()=>{
    it('check action dispatch',()=>{
      jest.spyOn(component.store, 'dispatch');
      component.addEmployee();
      expect(component.store.dispatch).toBeCalled( );
    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
