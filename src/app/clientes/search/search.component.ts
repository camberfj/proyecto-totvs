import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ResultsService } from 'src/app/services/results.service';
import { DialogComponent } from '../dialog/dialog.component';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    MatIconModule,
    DialogComponent,
   ],
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<String>();
  resultados: any[] = [];
  searchQuery: string;
  filteredClientes= [];


  constructor(private resultsService: ResultsService) {}


    onSearch() {
      this.resultsService.getClientes(this.searchQuery).subscribe(data => {
        this.filteredClientes = data.results;
      })
    }

  ngOnInit() {}


}
