import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { HomeownerEstimateResult } from '../_entities/contract/HomeownerEstimateResult';
import { InvestorEstimateResult } from '../_entities/investment/InvestorEstimateResult';

@Injectable({
    providedIn: 'root'
})
export class EstimateService {

    constructor(private http: HttpClient) { }

    public getHomeownerEstimate(address: string, electricityBill: number): Observable<HomeownerEstimateResult> {
        return this.http.get(`${environment.apiUrl}/estimate/homeowner`, {
            params: {
                address,
                amount: String(electricityBill)
            }
        }).pipe(
            map((result) => Deserialize(result, HomeownerEstimateResult)));
    }

    public getInvestorEstimate(investmentAmount: number): Observable<InvestorEstimateResult> {
        return this.http.get(`${environment.apiUrl}/estimate/investor`, {
            params: {
                amount: String(investmentAmount)
            }
        }).pipe(
            map((result) => Deserialize(result, InvestorEstimateResult)));
    }
}
