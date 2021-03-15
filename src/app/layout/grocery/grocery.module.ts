import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module'; 
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryHomeComponent } from './grocery-home/grocery-home.component';
import { GroceryProductListComponent } from './grocery-product-list/grocery-product-list.component';
import { GroceryViewBasketComponent } from './grocery-view-basket/grocery-view-basket.component';

@NgModule({
  declarations: [GroceryHomeComponent, GroceryProductListComponent, GroceryViewBasketComponent],
  imports: [
    CommonModule,
    GroceryRoutingModule,FormsModule,
    NavModule,
    CarouselModule
  ]
}) 
export class GroceryModule { }
