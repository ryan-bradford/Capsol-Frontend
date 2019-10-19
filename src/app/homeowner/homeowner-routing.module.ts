import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeownerComponent } from './homeowner.component';
import { CreateComponent } from '../_components/create/create.component';
import { LoginComponent } from '../_components/login/login.component';
import { AuthGuard } from '../_helper/auth.guard';

const routes: Routes = [
  { path: 'homeowner', component: HomeownerComponent, canActivate: [AuthGuard] },
  { path: 'homeowner/login', component: LoginComponent },
  { path: 'homeowner/create', component: CreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeownerRoutingModule { }
