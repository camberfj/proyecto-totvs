import { Component, OnInit } from '@angular/core';
import { AutorizaService } from 'src/app/autoriza/autoriza.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor(private autorizaService: AutorizaService) {}

  ngOnInit(): void {}

  login() {
    console.log('enviar datos');
    console.log(this.userName, this.password);
    this.autorizaService.autorizar(this.userName, this.password).subscribe(
      {
        complete: () => console.log('autorizado'),
        error: (err) => alert('Verifica tus datos'),
      }
    );
  }

}
