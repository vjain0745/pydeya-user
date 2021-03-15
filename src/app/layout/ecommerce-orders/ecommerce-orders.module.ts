import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { NavModule } from '../nav/nav.module'; 
import { EcommerceOrdersRoutingModule } from './ecommerce-orders-routing.module';
import { MyOrderEcommerceComponent } from './my-order-ecommerce/my-order-ecommerce.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { OrderPharmacyComponent } from './order-pharmacy/order-pharmacy.component';
import { MyOrderStatusComponent } from './my-order-status/my-order-status.component';
import { OrderProfileLeftComponent } from './order-profile-left/order-profile-left.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { OrderManagePaymentComponent } from './order-manage-payment/order-manage-payment.component';
import { OrderCommunicationSupportComponent } from './order-communication-support/order-communication-support.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { GroceryFavComponent } from './favourite/grocery-fav/grocery-fav.component';
import { FoodFavComponent } from './favourite/food-fav/food-fav.component'; 
import { PharmacyFavComponent } from './favourite/pharmacy-fav/pharmacy-fav.component';
import { MyChatComponent } from './my-chat/my-chat.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [MyOrderEcommerceComponent, FoodOrderComponent, OrderPharmacyComponent, MyOrderStatusComponent,OrderProfileLeftComponent, MyAddressComponent, OrderManagePaymentComponent, OrderCommunicationSupportComponent, FavouriteComponent, GroceryFavComponent, FoodFavComponent, PharmacyFavComponent, MyChatComponent, NotificationsComponent],
  imports: [
    CommonModule,
    EcommerceOrdersRoutingModule,
    NavModule,
  ],
  exports: [ 
    OrderProfileLeftComponent,
  ]

})
export class EcommerceOrdersModule { }
