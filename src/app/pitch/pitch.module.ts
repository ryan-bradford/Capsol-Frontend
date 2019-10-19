import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { PitchRoutingModule } from './pitch-routing.module';
import { PitchComponent } from './pitch.component';


@NgModule({
  declarations: [PitchComponent],
  imports: [
    CommonModule,
    PitchRoutingModule,
    MatButtonModule
  ]
})
export class PitchModule { }
