import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss'],
})
export class DirectiveDemoComponent implements OnInit {
  selectedColor: string = '#000000';
  constructor() {}

  ngOnInit(): void {}
  applyColor(color:string) {
    this.selectedColor = color;
  }
}
