import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class PokemonsService {
    constructor(private http: HttpClient) {

    }

    addPokemons(data) {
        return this.http.post(environment.url + '/pokemon/insert', data);
    }

    searchPokemons() {
        return this.http.get(environment.url + '/pokemon/findAll');
    }
}