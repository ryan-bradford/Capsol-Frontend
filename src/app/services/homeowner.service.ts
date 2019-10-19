import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { Homeowner } from '../entities/Homeowner';

@Injectable({
    providedIn: 'root'
})
export class HomeownerService {

    constructor(private http: HttpClient) {

    }


    public addHomeowner(homeowner: Homeowner): Observable<Homeowner> {
        return this.http.post(`${environment.apiUrl}/homeowner`, { user: homeowner }).pipe(
            map((result): Homeowner => Deserialize(result, Homeowner)));
    }
}
