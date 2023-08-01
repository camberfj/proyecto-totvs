import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizaService } from 'src/app/autoriza/autoriza.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string='';
  password: string='';

  constructor(private autorizaService: AutorizaService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.autorizaService.autorizar(this.userName, this.password).subscribe(
      {
        complete: () => this.router.navigate(['clientes']),
        error: (err) => alert('Verifica tus datos'),
      }
    );
  }

}
