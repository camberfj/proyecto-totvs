import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoModule } from '@po-ui/ng-components';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';


@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, HomeRoutingModule, PoModule, FormsModule, MessageModule],
  exports: [HomeComponent],
})
export class HomeModule { }
