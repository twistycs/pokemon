import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable()
export class TrainerService {
    constructor(private http: HttpClient) {

    }

    addTrainer(data) {
        return this.http.post(environment.url + '/trainer/insert', data);
    }

    searchTrainer(userId) {
        return this.http.post(environment.url + '/trainer/' + userId, '');
    }
}