import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { RickMorty } from '@interface/rick-morty';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  apiUrl: string = "https://rickandmortyapi.com/api";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json"
    })
  }

  constructor(private httpClient: HttpClient) { }

  getChars(): Observable<RickMorty[]> {
    return this.httpClient.get<RickMorty[]>(this.apiUrl+"/character/1,2,3,4,5,6,7,8,9")
  }
}
