import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appColorPicker]',
})
export class ColorPickerDirective implements OnChanges {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @Input('appColorPicker') color = 'green';

  ngOnChanges() :void{
    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      this.color
    );
  }
}
