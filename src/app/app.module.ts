import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule, MatButtonModule, MatCardModule, MatToolbarModule,
  MatInputModule, MatTableModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './_components/alert/alert.component';
import { CreateComponent } from './_components/create/create.component';
import { LoginComponent } from './_components/login/login.component';
import { PitchComponent } from './pitch/pitch.component';
import { HomeownerComponent } from './homeowner/homeowner.component';
import { InvestorComponent } from './investor/investor.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CreateComponent,
    LoginComponent,
    PitchComponent,
    HomeownerComponent,
    InvestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatTableModule,
    NgxChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
