import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HomeownerStat } from '../_entities/pitch/HomeownerStat';
import { Deserialize } from 'cerialize';
import { map } from 'rxjs/operators';
import { InvestorStat } from '../_entities/pitch/InvestorStat';
import { PerformanceStat } from '../_entities/pitch/PerformanceStat';

@Injectable({
    providedIn: 'root'
})
export class StatService {

    constructor(private http: HttpClient) { }

    public getHomeownerStats(): Observable<HomeownerStat> {
        return this.http.get(`${environment.apiUrl}/stat/homeowner`).pipe(
            map((result) => Deserialize(result, HomeownerStat))
        );
    }

    public getInvestorStats(): Observable<InvestorStat> {
        return this.http.get(`${environment.apiUrl}/stat/investor`).pipe(
            map((result): InvestorStat => {
                return Deserialize(result, InvestorStat);
            })
        );
    }

    public getHistoricalPerformance(): Observable<PerformanceStat> {
        return this.http.get(`${environment.apiUrl}/stat/investor/performance`).pipe(
            map((result): PerformanceStat => {
                return Deserialize(result, PerformanceStat);
            })
        );
    }
}
