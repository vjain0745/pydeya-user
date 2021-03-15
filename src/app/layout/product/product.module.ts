import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule  } from 'ngx-owl-carousel-o';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductlistgridLeftComponent } from './productlistgrid-left/productlistgrid-left.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyEcommerceCartComponent } from './my-ecommerce-cart/my-ecommerce-cart.component';
import { EcommercePaymentLoginComponent } from './ecommerce-payment-login/ecommerce-payment-login.component';
import { EcommerceOrderSuccessfullComponent } from './ecommerce-order-successfull/ecommerce-order-successfull.component';


@NgModule({
  declarations: [ProductListComponent, ProductGridComponent, ProductlistgridLeftComponent, ProductDetailsComponent, MyEcommerceCartComponent, EcommercePaymentLoginComponent, EcommerceOrderSuccessfullComponent], 
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavModule, 
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports: [
    ProductlistgridLeftComponent,
  ]
})
export class ProductModule { }
