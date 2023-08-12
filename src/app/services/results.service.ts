import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../clientes/models/post';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {
 clientes: any[]
 url: string = 'http://localhost:5000/resultados';

  constructor(private HttpClient: HttpClient) {
    this.clientes = []
}
buscarClientes(search: string): Observable<Post[]> {
  return this.HttpClient.get<Post[]>(`${this.url}?name=${search}`)
  }
}
