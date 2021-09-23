import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ColorPickerDirective } from '../../../directives/color-picker.directive';

import { DirectiveDemoComponent } from './directive-demo.component';

describe('DirectiveDemoComponent', () => {
  let component: DirectiveDemoComponent;
  let fixture: ComponentFixture<DirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveDemoComponent ,ColorPickerDirective],
      imports: [CommonModule, RouterModule.forChild([])],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('applyColor',()=>{
    it('check color is set or not',()=>{
      component.applyColor('red');
    expect(component.selectedColor).toBe('red');
    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
