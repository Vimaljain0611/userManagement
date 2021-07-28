import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editEmployeeComponent } from './edit-employee.component';

describe('editEmployeeComponent', () => {
  let component: editEmployeeComponent;
  let fixture: ComponentFixture<editEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ editEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(editEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
