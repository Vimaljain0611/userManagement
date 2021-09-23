import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoComponent } from './directive-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ColorPickerDirective } from '../../../directives/color-picker.directive';

const routes: Routes = [
  {
    path: '',
    component: DirectiveDemoComponent,
  },
];

@NgModule({
  declarations: [DirectiveDemoComponent, ColorPickerDirective],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DirectiveDemoModule {}
