import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyEcommerceCartComponent } from './my-ecommerce-cart/my-ecommerce-cart.component';
import { EcommercePaymentLoginComponent } from './ecommerce-payment-login/ecommerce-payment-login.component';
import { EcommerceOrderSuccessfullComponent } from './ecommerce-order-successfull/ecommerce-order-successfull.component';


const routes: Routes = [
  { path: 'product-list/:id',component: ProductListComponent},
  { path: 'product-grid',component: ProductGridComponent},
  { path: 'product-details/:id',component: ProductDetailsComponent},
  { path: 'my-ecommerce-cart',component: MyEcommerceCartComponent},
  { path: 'ecommerce-payment-login',component: EcommercePaymentLoginComponent },
  { path: 'ecommerce-order-successful',component: EcommerceOrderSuccessfullComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
