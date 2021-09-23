import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UpdateEmployee } from '../../../../state/employeeState/employee.action';
import { editEmployeeComponent } from './edit-employee.component';
import { Employee } from './../../../../state/employeeState/employee';

describe('editEmployeeComponent', () => {
  let component: editEmployeeComponent;
  let fixture: ComponentFixture<editEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [editEmployeeComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule, NgxsModule.forRoot([]),],
providers:[BsModalRef,Store]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(editEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('input values not null', () => {
      component.employeeData = {id:'121',name:'jhon',email:'vv@hbds',contact:'78w43'};
      component.ngOnInit();
      expect(component.employeeData.name).not.toBeNull();
      expect(component.employeeData.email).not.toBeNull();
      expect(component.employeeData.contact).not.toBeNull();

    });
    it('input values to be  null', () => {
      component.employeeData = {id:'',name:'',email:'',contact:''};
      component.ngOnInit();
      expect(component.employeeData.name).toBeDefined();
      expect(component.employeeData.email).toBeDefined();
      expect(component.employeeData.contact).toBeDefined();

    });
  });

  describe('updateUser',()=>{
    it('check form data',()=>{
      const form = component.editUserForm.value;
      const data = {
        id:'2323',
        name:form.name,
        email:form.name,
        contact:form.contact
      }
      jest.spyOn(component.store,'dispatch')
      component.updateUser('2323');
      expect(component.store.dispatch).toBeCalledWith(new UpdateEmployee('2323',data));

    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
