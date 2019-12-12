import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class LogInService {
    constructor(private http: HttpClient) {

    }

    login(data) {
        return this.http.post(environment.url + '/login', data);
    }

    getUserName() {
        return this.http.get(environment.url + '/login/username', {
            params: new HttpParams().append('token', localStorage.getItem('token'))
        });
    }
}