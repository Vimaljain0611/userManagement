import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';
import { PaginationModule } from '../../../../pagination/pagination.module';
import { TableModule } from '../../../../table/table.module';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { editEmployeeComponent } from '../edit-employee/edit-employee.component';
import { GridComponent } from './grid.component';
import { Employee } from './../../../../state/employeeState/employee';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GridComponent,
        editEmployeeComponent,
        DeleteModalComponent,
      ],
      imports: [
        CommonModule,
        RouterModule.forChild([]),
        TableModule,
        PaginationModule,
        BsDropdownModule.forRoot(),
        NgxsModule.forRoot([]),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
      ],
      providers: [BsModalRef, BsModalService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('pageCount', () => {
      const pageCount = component.totalPageCount;
      component.ngOnInit();
      expect(pageCount).not.toBeNull();
    });

    it('check pagination function', () => {
      const spy = jest.spyOn(component, 'pagination');
      component.ngOnInit();
      expect(spy).toBeCalled();
    });
  });
  describe('displayActivePage', () => {
    it('active page value', () => {
      component.displayActivePage(2);
      const activePage = component.activePage;
      expect(activePage).toBe(2);
    });
    it('pageCount', () => {
      const pageCount = component.totalPageCount;
      component.displayActivePage(2);
      expect(pageCount).not.toBeNull();
    });
    it('check pagination function', () => {
      const spy = jest.spyOn(component, 'pagination');
      component.displayActivePage(2);
      expect(spy).toBeCalled();
    });
  });

  describe('ChangePageSize', () => {
    it('active page value', () => {
      component.ChangePageSize(5, 1);
      const pagesize = component.pagesize;
      const activePage = component.activePage;
      expect(pagesize).toBe(5);
      expect(activePage).toBe(1);
    });
    it('pageCount', () => {
      const pageCount = component.totalPageCount;
      component.ChangePageSize(5, 1);
      expect(pageCount).not.toBeNull();
    });
    it('check pagination function', () => {
      const spy = jest.spyOn(component, 'pagination');
      component.ChangePageSize(5, 1);
      expect(spy).toBeCalled();
    });
  });

  describe('getPageCount', () => {
    it('check service return pageCount', () => {
      component.totalRecords = 25;
      component.pagesize = 10;
      const getPageCount = component.employeeService.getPageCount(
        component.totalRecords,
        component.pagesize
      );
      const returnValue = component.getPageCount();
      expect(returnValue).toBe(getPageCount);
    });
  });

  describe('pagination', () => {
    it('check observables', () => {
      let employees = [
        { name: 'raj', id: '112', email: 'vj@sjs', contact: '788789' },
        { name: 'raj', id: '112', email: 'vj@sjs', contact: '788789' },
        { name: 'raj', id: '112', email: 'vj@sjs', contact: '788789' },
      ];
      Object.defineProperty(component, 'employee', { writable: true });
      component.employee = of(employees);

      let empData: Employee[];
      let activePage: number = 1;
      let pagesize: number = 2;
      let lastIndex: number;
      let firstIndex: number;

      component.pagination();
      component.employee.subscribe((val) => {
        component.totalRecords = val.length;
        empData = val;
        lastIndex = activePage * pagesize;
        firstIndex = (activePage - 1) * pagesize;
        component.dataToDisplay = empData.slice(firstIndex, lastIndex);
      });
      let dataToDisplayAfterSlice = empData.slice(0, 2);
      expect(component.totalRecords).toBe(3);
      expect(empData).toBe(employees);
      expect(lastIndex).toBe(2);
      expect(firstIndex).toBe(0);
      expect(component.dataToDisplay).toStrictEqual(dataToDisplayAfterSlice);
    });
  });

  describe('open edit modal', () => {
    it('should open employee edit modal', () => {
      component.openEditEmployeeModal('2222');
      expect(
        component.employeeService.openEditEmployeeModal(2222)
      ).toBeCalled();
    });
  });

  describe('open delete modal', () => {
    it('should open employee delete modal', () => {
      component.openDeleteEmployeeModal('2222');
      expect(
        component.employeeService.openDeleteEmployeeModal(2222)
      ).toBeCalled();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
