import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class LogInService {
    constructor(private http: HttpClient) {

    }

    login(data) {
        return this.http.post(environment.url + '/login', data);
    }
}