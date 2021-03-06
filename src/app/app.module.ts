import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule, MatButtonModule, MatCardModule, MatToolbarModule,
  MatInputModule, MatTableModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatProgressBarModule
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_components/alert/alert.component';
import { CreateComponent } from './_components/create/create.component';
import { LoginComponent } from './_components/login/login.component';
import { PitchComponent } from './pitch/pitch.component';
import { HomeownerComponent } from './homeowner/homeowner.component';
import { InvestorComponent } from './investor/investor.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RequestsComponent } from './investor/requests/requests.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InvestorToolbarComponent } from './investor/toolbar/investor.toolbar.component';
import { InvestorGraphComponent } from './investor/graph/graph.component';
import { InvestorOverviewToolbarComponent } from './investor/overview-toolbar/overview.toolbar.component';
import { TransferFundsModalComponent } from './investor/transfer-funds-modal/transfer.funds.modal';
import { HomeownerToolbarComponent } from './homeowner/toolbar/homeowner.toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeownerEstimateModalComponent } from './pitch/homeowner-estimate/homeowner.estimate.modal';
import { ThemeEmitterComponent } from './_components/theme.emitter';
import { InvestorEstimateModalComponent } from './pitch/investor-estimate/investor.estimate.modal';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CreateComponent,
    LoginComponent,
    PitchComponent,
    HomeownerComponent,
    InvestorComponent,
    RequestsComponent,
    InvestorToolbarComponent,
    InvestorGraphComponent,
    InvestorOverviewToolbarComponent,
    TransferFundsModalComponent,
    HomeownerEstimateModalComponent,
    HomeownerToolbarComponent,
    ThemeEmitterComponent,
    InvestorEstimateModalComponent
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
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxChartsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [TransferFundsModalComponent, HomeownerEstimateModalComponent, InvestorEstimateModalComponent]
})
export class AppModule { }
