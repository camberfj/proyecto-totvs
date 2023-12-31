import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizaService {

  constructor(private httpClient: HttpClient) { }

  autorizar(userName: string, password: string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login',{
      userName,
      password,
    });
  }
}
