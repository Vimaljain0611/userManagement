import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractedEntitiesComponent } from './extracted-entities.component';

describe('ExtractedEntitiesComponent', () => {
  let component: ExtractedEntitiesComponent;
  let fixture: ComponentFixture<ExtractedEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractedEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractedEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
