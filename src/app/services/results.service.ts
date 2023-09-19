import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../datos/info';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';




  constructor(private httpClient: HttpClient) {}

getClientes(searchQuery: string): Observable<any> {
  return this.httpClient.get<any>(`${this.apiUrl}?name=${searchQuery}`);
  }

  getCharacterResults(openDialog: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?name=${openDialog}`);
  }

}
