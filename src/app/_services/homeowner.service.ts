import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { Homeowner } from '../_entities/Homeowner';
import { Investor } from '../_entities/Investor';
import { SolarOption } from '../_entities/SolarOption';

@Injectable({
    providedIn: 'root'
})
export class HomeownerService {

    private homeowners: BehaviorSubject<Map<string, Homeowner>>;

    constructor(private http: HttpClient) {
        this.homeowners = new BehaviorSubject(new Map());
    }

    private getHomeowners(): Observable<Map<string, Homeowner>> {
        this.http.get(`${environment.apiUrl}/homeowner`, { withCredentials: true }).pipe(
            map((result): Homeowner[] => (result as any).users.map((item) => Deserialize(item, Homeowner))),
            tap((result) => {
                const currentHomeowners = this.homeowners.value;
                result.forEach((homeowner) => currentHomeowners.set(homeowner.email, homeowner));
                this.homeowners.next(currentHomeowners);
            })).subscribe();
        return this.homeowners;
    }


    public getHomeowner(email: string): Observable<Homeowner> {
        this.http.get(`${environment.apiUrl}/homeowner/${email}`, { withCredentials: true }).pipe(
            map((result): Homeowner => Deserialize(result, Homeowner)),
            tap((result) => {
                const currentHomeowners = this.homeowners.value;
                currentHomeowners.set(result.email, result);
                this.homeowners.next(currentHomeowners);
            })).subscribe();
        return this.homeowners.pipe(map((Homeowners) => Homeowners.get(email)));
    }

    public addHomeowner(homeowner: Homeowner): Observable<void> {
        return this.http.post(`${environment.apiUrl}/homeowner`, { user: homeowner }).pipe(
            tap((result) => this.getHomeowner(homeowner.email).subscribe()),
            map((result) => { return; }));
    }

    public getOptionDetails(email: string, option: number): Observable<SolarOption> {
        return this.http.get(`${environment.apiUrl}/homeowner/${email}/options/${option}`, { withCredentials: true }).pipe(
            map((result) => Deserialize(result, SolarOption)));
    }

    public createContract(email: string, amount: number): Observable<void> {
        return this.http.put(`${environment.apiUrl}/homeowner/${email}/home`, { amount }, { withCredentials: true }).pipe(
            tap((result) => this.getHomeowner(email).subscribe()),
            map((result) => { return; }));
    }

}
