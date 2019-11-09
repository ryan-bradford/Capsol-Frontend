import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InvestorService } from '../../_services/investor.service';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';
import { Observable } from 'rxjs';
import { HomeownerService } from '../../_services/homeowner.service';
import { Investor } from 'src/app/_entities/user/Investor';
import { Homeowner } from 'src/app/_entities/user/Homeowner';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  loading = false;
  submitted = false;
  name: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private investorService: InvestorService,
    private homeownerService: HomeownerService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {
  }

  createAccount() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    let toPipe: Observable<any>;
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    if (localStorage.getItem('type') === 'investor') {
      toPipe = this.investorService.addInvestor(newUser as Investor);
    } else {
      toPipe = this.homeownerService.addHomeowner(newUser as Homeowner);
    }
    toPipe.pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          if (localStorage.getItem('type') === 'investor') {
            this.router.navigate(['/investor/login'], { replaceUrl: true, relativeTo: this.route });
          } else {
            this.router.navigate(['/homeowner/login'], { replaceUrl: true, relativeTo: this.route });
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
