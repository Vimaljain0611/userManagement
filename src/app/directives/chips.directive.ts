import { ElementRef, HostListener } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Directive({
  selector: '[appChips]',
})
export class ChipsDirective {
  ele;
  totalWidth;
  chipPosition;
  chipListWrapper;

  constructor(public element: ElementRef) {}
  @Input('appChips') elem = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.totalWidth = this.element.nativeElement.parentElement.parentElement.parentElement.offsetWidth;
    this.chipListWrapper = this.element.nativeElement.parentElement.offsetWidth;
    this.element.nativeElement.parentElement.style.width =
      this.chipListWrapper + 20 + 'px';
    const chipWidth = this.element.nativeElement.getBoundingClientRect().width;
    const chipXAxis = this.element.nativeElement.getBoundingClientRect().x;
    const chipParentXAxis = this.element.nativeElement.parentElement.parentElement.parentElement.getBoundingClientRect()
      .x;
    this.chipPosition = chipWidth + (chipXAxis - chipParentXAxis) + 6;
    if (this.chipPosition > this.totalWidth) {
      this.ele = this.element.nativeElement.cloneNode(true);
      this.ele.style.width = this.element.nativeElement.offsetWidth + 6 + 'px';
      this.ele.style.position = 'absolute';
      this.ele.style.zIndex = '500';
      this.ele.style.marginLeft = '-10px ';
      this.element.nativeElement.append(this.ele);
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.parentElement.style.width =
      this.chipListWrapper + 'px';
    if (this.chipPosition > this.totalWidth) {
      this.element.nativeElement.removeChild(this.ele);
    }
  }
  changeWidth(ele) {
    this.element.nativeElement = ele;
  }
}
