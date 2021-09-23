import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgxsModule, Store } from '@ngxs/store';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';
import { DeleteModalComponent } from '../components/main/employees/delete-modal/delete-modal.component';
import { DeleteModalModule } from '../components/main/employees/delete-modal/delete-modal.module';
import { editEmployeeComponent } from '../components/main/employees/edit-employee/edit-employee.component';
import { EditEmployeeModule } from '../components/main/employees/edit-employee/edit-employee.module';
import { Employee } from './../state/employeeState/employee';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store, BsModalService, BsModalRef],
      imports: [
        CommonModule,
        StoreModule.forRoot({}),
        ModalModule,
        RouterModule.forChild([]),
        NgxsModule.forRoot([]),
        EditEmployeeModule,
        DeleteModalModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
    TestBed.overrideModule(BrowserModule, {
      set: { entryComponents: [editEmployeeComponent, DeleteModalComponent] },
    });
    service = TestBed.inject(EmployeeService);
  });
  describe('ngOnInit', () => {
    it('action dispatch', () => {
      jest.spyOn(service.store, 'dispatch');
      service.ngOnInit();
      expect(service.store.dispatch).toBeCalled();
    });
  });

  describe('getEmployeeById', () => {
    let data: Employee[];
    let employees = [
      {
        name: 'raj',
        id: '112',
        email: 'vj@sjs',
        contact: '788789',
        password: '12345',
      },
      {
        name: 'raj',
        id: '112',
        email: 'vj@sjs',
        contact: '788789',
        password: '12345',
      },
      {
        name: 'raj',
        id: '112',
        email: 'vj@sjs',
        contact: '788789',
        password: '12345',
      },
    ];

    it('return value from employee obesrvable', () => {
      let filteredEmployee = {
        name: 'raj',
        id: '112',
        email: 'vj@sjs',
        contact: '788789',
        password: '12345',
      };

      Object.defineProperty(service, 'employee', { writable: true });
      service.employee = of(employees);
      service.employee.subscribe((val) => (data = val));

      const returnItem = data.find((val) => val.id == '112');
      service.getEmployeeById('112');
      expect(returnItem).toEqual(filteredEmployee);
    });
    it('return empty array value from employee obesrvable', () => {
      Object.defineProperty(service, 'employee', { writable: true });
      service.employee = of([]);
      service.employee.subscribe((val) => (data = val));

      expect(data).toEqual([]);
    });
  });

  describe('openEditEmployeeModal', () => {
    it('opens edit employee modal', () => {
      jest.spyOn(service.modalService, 'show');
      service.openEditEmployeeModal('123');
      jest.spyOn(service, 'getEmployeeById');
      const initialState = {
        employeeData: service.getEmployeeById('123'),
        id: '123',
      };
      expect(service.modalService.show).toBeCalledWith(editEmployeeComponent, {
        initialState,
      });
    });
  });

  describe('openDeleteEmployeeModal', () => {
    it('opens delete employee modal', () => {
      const initialState = {
        id: '123',
      };
      jest.spyOn(service.modalService, 'show');
      service.openDeleteEmployeeModal('123');
      expect(service.modalService.show).toBeCalledWith(DeleteModalComponent, {
        initialState,
      });
    });
  });

  describe('getPageCount', () => {
    it('check for return page count when condition satisfies and round  < pagecount ', () => {
      let totalPage = 0;
      let roundedPageCount;
      if (25 > 0 && 10 > 0) {
        let pageCount = 25 / 10;
        roundedPageCount = Math.floor(pageCount);
        totalPage =
          roundedPageCount < pageCount
            ? roundedPageCount + 1
            : roundedPageCount;
      }
      service.getPageCount(25, 10);
      expect(totalPage).toBe(3);
      expect(roundedPageCount).toBe(2);
    });
    it('check  condition satisfies round = pagecount ', () => {
      let totalPage = 0;
      let roundedPageCount;
      if (30 > 0 && 10 > 0) {
        let pageCount = 30 / 10;
        roundedPageCount = Math.floor(pageCount);
        totalPage =
          roundedPageCount < pageCount
            ? roundedPageCount + 1
            : roundedPageCount;
      }
      service.getPageCount(30, 10);
      expect(totalPage).toBe(3);
      expect(roundedPageCount).toBe(3);
    });

    it('check for return page count when condition not satisfies', () => {
      let totalPage = 0;

      if (0 > 0 && 10 > 0) {
        const pageCount = 0 / 10;
        const roundedPageCount = Math.floor(pageCount);
        totalPage =
          roundedPageCount < pageCount
            ? roundedPageCount + 1
            : roundedPageCount;
      }
      service.getPageCount(0, 10);
      expect(totalPage).toBe(0);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
