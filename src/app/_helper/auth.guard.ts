import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router, public route: ActivatedRoute) { }

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            if (localStorage.getItem('type') === 'investor') {
                this.router.navigate(['investor/login'], { relativeTo: this.route });
            } else {
                this.router.navigate(['homeowner/login'], { relativeTo: this.route });
            }
            return false;
        }
        return true;
    }
}
