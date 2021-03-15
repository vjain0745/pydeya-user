import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyOrderEcommerceComponent } from './my-order-ecommerce/my-order-ecommerce.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { OrderPharmacyComponent } from './order-pharmacy/order-pharmacy.component';
import { MyOrderStatusComponent } from './my-order-status/my-order-status.component';

import { MyAddressComponent } from './my-address/my-address.component';
import { OrderManagePaymentComponent } from './order-manage-payment/order-manage-payment.component';
import { OrderCommunicationSupportComponent } from './order-communication-support/order-communication-support.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { GroceryFavComponent } from './favourite/grocery-fav/grocery-fav.component';
import { FoodFavComponent } from './favourite/food-fav/food-fav.component';
import { PharmacyFavComponent } from './favourite/pharmacy-fav/pharmacy-fav.component';
import { MyChatComponent } from './my-chat/my-chat.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [ 

  { path: 'my-ecommerce-order',component:MyOrderEcommerceComponent},
  { path: 'my-food-order',component:FoodOrderComponent },
  { path: 'my-pharmacy-order',component:OrderPharmacyComponent},  
  { path: 'my-order-status/:id',component:MyOrderStatusComponent},  
  { path: 'order-my-address',component:MyAddressComponent},  
  { path: 'order-manage-payment',component:OrderManagePaymentComponent}, 
  { path: 'order-communication-support',component:OrderCommunicationSupportComponent},
  { path: 'favourite',component:FavouriteComponent},    
  { path: 'grocery-fav',component:GroceryFavComponent},   
  { path: 'food-fav',component:FoodFavComponent},  
  { path: 'pharmacy-fav',component:PharmacyFavComponent},  
  { path: 'my-chat',component:MyChatComponent},   
  { path: 'notification',component:NotificationsComponent},    

]; 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceOrdersRoutingModule { }
