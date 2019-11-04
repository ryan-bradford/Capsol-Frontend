import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
          if (localStorage.getItem('type') === 'investor') {
            this.router.navigate(['/investor'], { replaceUrl: true, relativeTo: this.route });
          } else {
            this.router.navigate(['/homeowner'], { replaceUrl: true, relativeTo: this.route });
          }
        },
        error => {
          this.alertService.error('Invalid credentials');
          this.loading = false;
        });
  }
}
