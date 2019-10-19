import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { Homeowner } from '../_entities/Homeowner';

@Injectable({
    providedIn: 'root'
})
export class HomeownerService {

    constructor(private http: HttpClient) {

    }

    public getHomeowner(email: string): Observable<Homeowner> {
        return this.http.get(`${environment.apiUrl}/homeowner/${email}`, { withCredentials: true }).pipe(
            map((result): Homeowner => Deserialize(result, Homeowner)));
    }

    public addHomeowner(homeowner: Homeowner): Observable<Homeowner> {
        return this.http.post(`${environment.apiUrl}/homeowner`, { user: homeowner }).pipe(
            map((result): Homeowner => Deserialize(result, Homeowner)));
    }
}
