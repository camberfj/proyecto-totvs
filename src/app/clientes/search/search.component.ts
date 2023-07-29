import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ResultsService } from 'src/app/services/results.service';
/*import { Post } from 'src/app/models/posts';*/


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:string ='';
  /*results: Post[] = [];*/
  interval:any;
  loading:boolean=false;
  /*resultsToCards: Post[]=[];*/

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
  }

  _search(parameter: number) {
  	let exclusions = [37,38,39,40,13]; //para omitir flechas y enter
  	clearTimeout(this.interval);
   	this.interval = setTimeout(()=>{
      if (exclusions.findIndex(e=>e==parameter) == -1 && this.search.trim() != '') {
    		this.loading=true;
	  		/*this.resultsService.getPosts()*/
        this.loading=false;}},1000);}

  selectResult(i:number) {}
}
