import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { LeftSideBarModule } from './left-side-bar/left-side-bar.module';
import { VideoPlayerModule } from '../video-player/video-player.module';
import { EditImageModule } from 'src/app/edit-image/edit-image.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./employees/employees.module').then((m) => m.EmployeesModule),
      },
      {
        path: 'directives-demo',
        loadChildren: () =>
          import('./directive-demo/directive-demo.module').then(
            (m) => m.DirectiveDemoModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
];
@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, LeftSideBarModule, RouterModule.forChild(routes),VideoPlayerModule,EditImageModule],
  exports: [],
})
export class MainModule {}
