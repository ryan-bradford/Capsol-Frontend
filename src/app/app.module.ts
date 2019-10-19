import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_components/alert/alert.component';
import { InvestorModule } from './investor/investor.module';
import { HomeownerModule } from './homeowner/homeowner.module';
import { CreateComponent } from './_components/create/create.component';
import { LoginComponent } from './_components/login/login.component';
import { PitchComponent } from './pitch/pitch.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CreateComponent,
    LoginComponent,
    PitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InvestorModule,
    HomeownerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
