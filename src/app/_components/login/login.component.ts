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
export class LoginComponent {

  email: string;
  password: string;
  localStorage: any;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService,
  ) {
    this.localStorage = localStorage;
  }

  login(): void {
    this.alertService.clear();
    this.loading = true;
    this.authenticationService.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.alertService.clear();
          console.log(this.route.snapshot.url.toString());
          this.router.navigate(['../'], { replaceUrl: true, relativeTo: this.route });
        },
        error => {
          this.alertService.error('Invalid credentials');
          this.loading = false;
        });
  }
}
