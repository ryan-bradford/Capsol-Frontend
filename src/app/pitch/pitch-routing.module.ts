import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PitchComponent } from './pitch.component';

const routes: Routes = [{ path: '', component: PitchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PitchRoutingModule { }
