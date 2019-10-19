import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeownerComponent } from './homeowner.component';

const routes: Routes = [{ path: '', component: HomeownerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeownerRoutingModule { }
