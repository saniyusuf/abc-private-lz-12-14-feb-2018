import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModule} from '../dashboard/dashboard.module';

const rootRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rootRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
