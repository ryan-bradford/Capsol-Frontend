import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<object> {
    const enco: any = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${environment.apiUrl}/auth/login`, {
      email, password
    }, {
      headers: enco,
      withCredentials: true
    }).pipe(tap((result) => {
      localStorage.setItem('email', email);
    }));
  }

  public logout(): Observable<void> {
    localStorage.removeItem('email');
    return this.http.post(`${environment.apiUrl}/auth/logout`, {}).pipe(map((result) => { return; }));
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('email');
  }
}
