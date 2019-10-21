import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchComponent } from './pitch/pitch.component';
import { InvestorComponent } from './investor/investor.component';
import { AuthGuard } from './_helper/auth.guard';
import { LoginComponent } from './_components/login/login.component';
import { CreateComponent } from './_components/create/create.component';
import { HomeownerComponent } from './homeowner/homeowner.component';


const routes: Routes = [
  { path: '', component: PitchComponent },
  { path: 'investor', component: InvestorComponent, canActivate: [AuthGuard] },
  { path: 'investor/login', component: LoginComponent },
  { path: 'investor/create', component: CreateComponent },
  { path: 'homeowner', component: HomeownerComponent, canActivate: [AuthGuard] },
  { path: 'homeowner/login', component: LoginComponent },
  { path: 'homeowner/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
