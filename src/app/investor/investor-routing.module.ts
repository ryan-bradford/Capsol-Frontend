import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestorComponent } from './investor.component';
import { LoginComponent } from '../_components/login/login.component';
import { CreateComponent } from '../_components/create/create.component';
import { AuthGuard } from '../_helper/auth.guard';

const routes: Routes = [
  { path: 'investor', component: InvestorComponent, canActivate: [AuthGuard] },
  { path: 'investor/login', component: LoginComponent },
  { path: 'investor/create', component: CreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
