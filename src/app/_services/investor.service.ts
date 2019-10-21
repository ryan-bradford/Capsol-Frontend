import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { Investor } from '../_entities/Investor';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  private investors: Map<string, BehaviorSubject<Investor>>;

  constructor(private http: HttpClient) {
    this.investors = new Map();
  }

  private getInvestors(): Map<string, Observable<Investor>> {
    this.http.get(`${environment.apiUrl}/investor`, { withCredentials: true }).pipe(
      map((result): Investor[] => (result as any).map((item) => Deserialize(item, Investor))),
      tap((result) => result.forEach((investor) => this.investors.get(investor.email) ?
        this.investors.get(investor.email).next(investor) : this.investors.set(investor.email, new BehaviorSubject(investor)))));
    return this.investors;
  }


  public getInvestor(email: string): Observable<Investor> {
    return this.http.get(`${environment.apiUrl}/investor/${email}`, { withCredentials: true }).pipe(
      map((result): Investor => Deserialize(result, Investor)),
      tap((result) => this.investors.get(result.email) ?
        this.investors.get(result.email).next(result) : this.investors.set(result.email, new BehaviorSubject(result))),
      map((result) => this.investors.get(email)),
      mergeMap(res => res));
  }

  public addInvestor(investor: Investor): Observable<void> {
    return this.http.post(`${environment.apiUrl}/investor`, { user: investor }).pipe(
      map((result) => { return; }));
  }

  public addInvestment(email: string, amount: number): Observable<void> {
    return this.http.put(`${environment.apiUrl}/investor/${email}/investment`, { amount }, { withCredentials: true }).pipe(
      tap((result) => this.getInvestor(email).subscribe()),
      map((result) => { return; }));
  }

}
