import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/login-home/login-home.module').then(mod => mod.LoginHomeModule)
  },
  {
    path: 'ecommerce-order',
    loadChildren: () => import('./layout/ecommerce-orders/ecommerce-orders.module').then(mod => mod.EcommerceOrdersModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./layout/product/product.module').then(mod => mod.ProductModule)
  },
  {
    path: 'grocery',
    loadChildren: () => import('./layout/grocery/grocery.module').then(mod => mod.GroceryModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
