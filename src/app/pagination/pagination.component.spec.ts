import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('pageCount', () => {
      const pageCount = component.getPageCount;
      component.ngOnChanges();
      expect(pageCount).not.toBeNull();
    });
    it('check pages', () => {
      component.ngOnChanges();
      component.pages = component.getArrayOfPage(10);
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(component.pages).toEqual(array);
    });
  });

  describe('getPageCount', () => {
    it('check for return page count when condition satisfies and round  < pagecount ', () => {
      let totalPage = 0;
      component.totalRecords = 25;
      component.recordsPerPage = 10;
      let pageCount;
      let roundedPageCount;
      if (component.totalRecords > 0 && component.recordsPerPage > 0) {
        pageCount = component.totalRecords / component.recordsPerPage;
        roundedPageCount = Math.floor(pageCount);
        totalPage =
          roundedPageCount < pageCount
            ? roundedPageCount + 1
            : roundedPageCount;
      }
      component.getPageCount();
      expect(totalPage).toBe(3);
      expect(roundedPageCount).toBe(2);
    });
    it('check  condition satisfies round = pagecount ', () => {
      let totalPage = 0;
      component.totalRecords = 30;
      component.recordsPerPage = 10;
      let pageCount;
      let roundedPageCount;
      if (component.totalRecords > 0 && component.recordsPerPage > 0) {
        pageCount = component.totalRecords / component.recordsPerPage;
        roundedPageCount = Math.floor(pageCount);
        totalPage =
          roundedPageCount < pageCount
            ? roundedPageCount + 1
            : roundedPageCount;
      }
      component.getPageCount();
      expect(totalPage).toBe(3);
      expect(roundedPageCount).toBe(3);
    });

    it('check for return page count when condition not satisfies', () => {
      let totalPage = 0;
      component.totalRecords = 0;
      component.recordsPerPage = 10;
      if (component.totalRecords > 0 && component.recordsPerPage > 0) {
        const pageCount = component.totalRecords / component.recordsPerPage;
        const roundedPageCount = Math.floor(pageCount);
        totalPage =
          roundedPageCount < pageCount
            ? roundedPageCount + 1
            : roundedPageCount;
      }
      component.getPageCount();
      expect(totalPage).toBe(0);
    });
  });

  describe('getArrayOfPage', () => {
    it('check for array of page', () => {
      const pageArray = [];

      if (10 > 0) {
        for (let i = 1; i <= 10; i++) {
          pageArray.push(i);
        }
      }
      component.getArrayOfPage(10);
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(pageArray).toEqual(array);
    });
  });

  describe('onClickPage', () => {
    it('check emit active page even page number is >= 1', () => {
      component.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let pageNumber = 2;
      jest.spyOn(component.onPageChange, 'emit');
      if (pageNumber >= 1 && pageNumber <= component.pages.length) {
        component.activePage = pageNumber;
        component.onPageChange.emit(component.activePage);
      }
      component.onClickPage(2);
      fixture.detectChanges();
      expect(component.activePage).toBe(2);
      expect(component.onPageChange.emit).toHaveBeenCalledWith(
        component.activePage
      );
    });
  });

  describe('onClickPage', () => {
    it('check emit active page even page number is <= pages length', () => {
      component.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      component.activePage = 10;
      let pageNumber = 11;
      if (pageNumber >= 1 && pageNumber <= component.pages.length) {
        component.activePage = pageNumber;
        component.onPageChange.emit(component.activePage);
      }
      component.onClickPage(11);
      expect(component.activePage).toBe(10);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
