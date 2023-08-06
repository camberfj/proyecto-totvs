import { HttpClient } from '@angular/common/http';
import { Info } from './../datos/info';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor( private http: HttpClient) { }

  getInfo() {
    return this.http.get<Info[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
