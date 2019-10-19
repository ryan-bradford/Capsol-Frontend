import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InvestorService } from '../services/investor.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { Observable } from 'rxjs';
import { HomeownerService } from '../services/homeowner.service';

@Component({ templateUrl: 'create.component.html' })
export class CreateComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private investorService: InvestorService,
    private homeownerService: HomeownerService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    let toPipe: Observable<any>;
    if (this.router.url.includes('investor')) {
      toPipe = this.investorService.addInvestor(this.registerForm.value);
    } else {
      toPipe = this.homeownerService.addHomeowner(this.registerForm.value);
    }
    toPipe.pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          if (this.router.url.includes('investor')) {
            this.router.navigate(['/login/investor']);
          } else {
            this.router.navigate(['/login/homeowner']);
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
