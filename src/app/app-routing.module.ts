import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'directives-demo',
  //   loadChildren: () => import('./directive-demo/directive-demo.module').then((m) => m.DirectiveDemoModule),
  //   canActivate: [AuthGuard]
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
