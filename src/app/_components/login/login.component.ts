import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  localStorage: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService,
  ) {
    this.localStorage = localStorage;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = '../';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  get emailErrors(): ValidationErrors { return this.loginForm.controls.email.errors; }

  get passwordErrors(): ValidationErrors { return this.loginForm.controls.password.errors; }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.clear();
          this.router.navigate([this.returnUrl], { replaceUrl: true, relativeTo: this.route });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
