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

  private investors: BehaviorSubject<Map<string, Investor>>;

  constructor(private http: HttpClient) {
    this.investors = new BehaviorSubject(new Map());
  }

  private getInvestors(): Observable<Map<string, Investor>> {
    this.http.get(`${environment.apiUrl}/investor`, { withCredentials: true }).pipe(
      map((result): Investor[] => (result as any).users.map((item) => Deserialize(item, Investor))),
      tap((result) => {
        const currentInvestors = this.investors.value;
        result.forEach((investor) => currentInvestors.set(investor.email, investor));
        this.investors.next(this.investors.value);
      })).subscribe();
    return this.investors;
  }


  public getInvestor(email: string): Observable<Investor> {
    this.http.get(`${environment.apiUrl}/investor/${email}`, { withCredentials: true }).pipe(
      map((result): Investor => Deserialize(result, Investor)),
      tap((result) => {
        const currentInvestors = this.investors.value;
        currentInvestors.set(result.email, result);
        this.investors.next(currentInvestors);
      })).subscribe();
    return this.investors.pipe(map((investors) => investors.get(email)));
  }

  public addInvestor(investor: Investor): Observable<void> {
    return this.http.post(`${environment.apiUrl}/investor`, { user: investor }).pipe(
      tap((result) => this.getInvestor(investor.email).subscribe()),
      map((result) => { return; }));
  }

  public addInvestment(email: string, amount: number): Observable<void> {
    return this.http.put(`${environment.apiUrl}/investor/${email}/investment`, { amount }, { withCredentials: true }).pipe(
      tap((result) => this.getInvestor(email).subscribe()),
      map((result) => { return; }));
  }

  public sellInvestment(email: string, amount: number): Observable<void> {
    return this.http.put(`${environment.apiUrl}/investor/${email}/sell`, { amount }, { withCredentials: true }).pipe(
      tap((result) => this.getInvestor(email).subscribe()),
      map((result) => { return; }));
  }

  public handleRequests(): Observable<void> {
    return this.http.post(`${environment.apiUrl}/admin/update`, {}, { withCredentials: true }).pipe(
      tap((result) => this.getInvestors().subscribe()),
      map((result) => { return; }));
  }

  public tickTime(): Observable<void> {
    return this.http.post(`${environment.apiUrl}/admin/payments`, {}, { withCredentials: true }).pipe(
      tap((result) => this.getInvestors().subscribe()),
      map((result) => { return; }));
  }

}
