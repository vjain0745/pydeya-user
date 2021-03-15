import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryHomeComponent } from './grocery-home/grocery-home.component';
import { GroceryProductListComponent } from './grocery-product-list/grocery-product-list.component';
import { GroceryViewBasketComponent } from './grocery-view-basket/grocery-view-basket.component';

const routes: Routes = [
  { path: 'grocery-home',component: GroceryHomeComponent},
  { path: 'grocery-product-list/:id/:catdata',component: GroceryProductListComponent},
  { path: 'grocery-view-basket',component: GroceryViewBasketComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule { }
