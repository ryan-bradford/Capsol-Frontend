import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router, private route: ActivatedRoute) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 || err.status === 404) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                if (localStorage.getItem('type') === 'investor') {
                    this.router.navigate(['/investor/login'], { replaceUrl: true, relativeTo: this.route });
                } else {
                    this.router.navigate(['/homeowner/login'], { replaceUrl: true, relativeTo: this.route });
                }
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
