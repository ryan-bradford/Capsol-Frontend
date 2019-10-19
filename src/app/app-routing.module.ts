import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeownerModule } from './homeowner/homeowner.module';
import { PitchComponent } from './pitch/pitch.component';


const routes: Routes = [
  { path: '', redirectTo: 'pitch', pathMatch: 'full' },
  { path: 'pitch', component: PitchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
