import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../clientes/models/post';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private apiUrl = 'http://localhost:5000/resultados';
  private searchQuerySubject = new Subject<string>();



  constructor(private HttpClient: HttpClient) {}

getClientes(searchQuery: string): Observable<Post[]> {
  return this.HttpClient.get<Post[]>(`${this.apiUrl}?search=${searchQuery}`);
  }
}
