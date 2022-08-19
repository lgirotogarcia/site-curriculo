import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Cattos } from '../../interface/cattos';

@Injectable({
  providedIn: 'root'
})
export class CattosService {

  apiUrl: string = 'https://api.thecatapi.com/v1/images/search';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCattos(): Observable<Cattos[]> {
    return this.httpClient.get<Cattos[]>(this.apiUrl);
  }

}
