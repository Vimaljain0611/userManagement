import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoComponent } from './directive-demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DirectiveDemoComponent,
  },
];

@NgModule({
  declarations: [DirectiveDemoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DirectiveDemoModule {}
