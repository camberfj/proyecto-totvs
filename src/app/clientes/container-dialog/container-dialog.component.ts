import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-container-dialog',
  templateUrl: './container-dialog.component.html',
  styleUrls: ['./container-dialog.component.css']
})
export class ContainerDialogComponent implements OnInit {
  tarjeta: any[];
  openDialog: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {tarjeta: any}) {}


  ngOnInit(): void {
    this.tarjeta = this.data.tarjeta;
    console.log(this.data)
  }


}


