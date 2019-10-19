import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorModule } from './investor/investor.module';
import { PitchModule } from './pitch/pitch.module';
import { HomeownerModule } from './homeowner/homeowner.module';
import { CreateModule } from './create/create.module';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  { path: 'investor', loadChildren: () => InvestorModule },
  { path: 'pitch', loadChildren: () => PitchModule },
  { path: '', redirectTo: 'pitch', pathMatch: 'full' },
  { path: 'homeowner', loadChildren: () => HomeownerModule },
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'create', loadChildren: () => CreateModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
