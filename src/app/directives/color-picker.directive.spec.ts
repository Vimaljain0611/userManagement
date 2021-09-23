import { Component, DebugElement, Injectable, OnInit } from '@angular/core';
import { ColorPickerDirective } from './color-picker.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [appColorPicker]="'red'"></div>`,
})
class TestBgColorComponent {}

describe('ColorPickerDirective', () => {
  let component: TestBgColorComponent;
  let fixture: ComponentFixture<TestBgColorComponent>;
  let divEl: DebugElement;
  let directiveElement;
  let directive;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBgColorComponent, ColorPickerDirective],
    });
    fixture = TestBed.createComponent(TestBgColorComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('div'));

    directiveElement = fixture.debugElement.query(
      By.directive(ColorPickerDirective)
    );
    directive = directiveElement.injector.get(ColorPickerDirective);
    fixture.detectChanges();
  });

  it('should Change background color', () => {
    const bgColor = divEl.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('red');
  });

  it('check ngOnChanges', () => {
      directive.ngOnChanges();
      directive.render.setStyle(divEl.nativeElement, 'background-color', 'green');
      const bgColor = divEl.nativeElement.style.backgroundColor;
      expect(bgColor).toBe('green');
    });

});
