import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss'],
})
export class EditImageComponent implements OnInit {
  rotation: number = 0;
  width: string = '100%';
  brightness: number = 100;
  constructor() {}

  ngOnInit(): void {}
  zoomIn(image): void {
    var currWidth = image.clientWidth;
    this.width = currWidth + 100 + 'px';
  }
  zoomOut(image): void {
    var currWidth = image.clientWidth;
    this.width = currWidth - 100 + 'px';
  }
  rotateRight(): void {
    this.rotation += 90;
  }
  rotateLeft(): void {
    this.rotation -= 90;
  }
  setBrightness(brightnessScale): void {
    this.brightness = brightnessScale.value * 2;
  }
  reset()
  {
    this.rotation= 0;
    this.width = '100%';
    this.brightness= 100;
  }
}
