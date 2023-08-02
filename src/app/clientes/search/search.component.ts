import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  search:string;
  interval:any;
  loading:boolean=false;
  myControl:string;

  constructor() {}

  ngOnInit(): void {
  }


}
