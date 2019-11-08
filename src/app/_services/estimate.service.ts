import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { EstimateResult } from '../_entities/EstimateResult';

@Injectable({
    providedIn: 'root'
})
export class EstimateService {

    constructor(private http: HttpClient) { }

    public getHomeownerEstimate(address: string, electricityBill: number): Observable<EstimateResult> {
        return this.http.get(`${environment.apiUrl}/estimate/homeowner`, {
            params: {
                address,
                amount: String(electricityBill)
            }
        }).pipe(
            map((result) => Deserialize(result, EstimateResult)));
    }
}
