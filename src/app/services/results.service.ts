import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
/*import { Post } from 'src/app/models/posts';*/

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor( private http: HttpClient) { }

  /*getPosts() {
  	return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }*/
}
