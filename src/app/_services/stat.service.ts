import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StatService {

    constructor(private http: HttpClient) { }

    public getHomeownerStats() {
        return this.http.get(`${environment.apiUrl}/stat/homeowner`);
    }
}
