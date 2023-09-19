import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-container-dialog',
  templateUrl: './container-dialog.component.html',
  styleUrls: ['./container-dialog.component.css']
})
export class ContainerDialogComponent implements OnInit {
  tarjetas: any[] = [];
  openDialog: string = '';

  constructor(private resultsService: ResultsService) {}


  ngOnInit(): void {
    this.resultsService.getCharacterResults(this.openDialog).subscribe(data => {
      console.log(data.results)
      this.tarjetas = data.results;
    })
  }


}


