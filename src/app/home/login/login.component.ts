import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log('enviar datos');
    console.log(this.userName, this.password);
  }

}
