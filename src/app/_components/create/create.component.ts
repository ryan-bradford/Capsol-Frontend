import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InvestorService } from '../../_services/investor.service';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';
import { Observable } from 'rxjs';
import { HomeownerService } from '../../_services/homeowner.service';

@Component({ templateUrl: 'create.component.html' })
export class CreateComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private investorService: InvestorService,
    private homeownerService: HomeownerService,
    private alertService: AlertService,
    private route: ActivatedRoute
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
    if (localStorage.getItem('type') === 'investor') {
      toPipe = this.investorService.addInvestor(this.registerForm.value);
    } else {
      toPipe = this.homeownerService.addHomeowner(this.registerForm.value);
    }
    toPipe.pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['../login'], { replaceUrl: true, relativeTo: this.route });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
