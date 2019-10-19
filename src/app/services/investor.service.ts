import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { Investor } from '../entities/Investor';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(private http: HttpClient) {

  }


  public getInvestor(email: string): Observable<Investor> {
    return this.http.get(`${environment.apiUrl}/investor/${email}`).pipe(
      map((result): Investor => Deserialize(result, Investor)));
  }

  public addInvestor(investor: Investor): Observable<Investor> {
    return this.http.post(`${environment.apiUrl}/investor`, { user: investor }).pipe(
      map((result): Investor => Deserialize(result, Investor)));
  }
}
