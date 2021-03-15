import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { GroceryNavComponent } from './grocery-nav/grocery-nav.component';

import { EcommerceNavComponent } from './ecommerce-nav/ecommerce-nav.component';
import {Ng2TelInputModule} from 'ng2-tel-input';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,GroceryNavComponent,EcommerceNavComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule,
    Ng2TelInputModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    GroceryNavComponent,
    EcommerceNavComponent
  ]
})
export class NavModule { }
