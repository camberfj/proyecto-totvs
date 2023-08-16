import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../clientes/models/post';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';




  constructor(private HttpClient: HttpClient) {}

getClientes(searchQuery: string): Observable<any> {
  return this.HttpClient.get<any>(`${this.apiUrl}?name=${searchQuery}`);
  }
}
