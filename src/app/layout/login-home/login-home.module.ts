import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module'; 
import { CarouselModule  } from 'ngx-owl-carousel-o';
import {LoginHomeComponent} from './login-home.component';
import { LoginHomeRoutingModule } from './login-home-routing.module';



@NgModule({
  declarations: [LoginHomeComponent],
  imports: [
    CommonModule,
    LoginHomeRoutingModule,
    CarouselModule,
    NavModule,  
  ]
})
export class LoginHomeModule { }
