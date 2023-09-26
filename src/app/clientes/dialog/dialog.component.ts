import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { ContainerDialogComponent } from '../container-dialog/container-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
  ]
})
export class DialogComponent implements OnInit {
  panelOpenState = false;
  @Input() tarjetas: any[];

  constructor(private dialog: MatDialog) {}

  openDialog(tarjeta: any) {
    const dialogRef = this.dialog.open(ContainerDialogComponent, {
      data: { tarjeta },
    });
}

  ngOnInit(): void {}
}
