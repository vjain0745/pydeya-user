import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service'
import {environment} from '../../../../environments/environment'
@Component({
  selector: 'app-my-order-ecommerce',
  templateUrl: './my-order-ecommerce.component.html',
  styleUrls: ['./my-order-ecommerce.component.css']
})
export class MyOrderEcommerceComponent implements OnInit {
  groceryorders
  ongoingOrders
  fiteredData
  allOrders
  Orders
  url = environment.imageUrl
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.allorders()

  }

async allorders(){
  this.groceryorders = await this.service.post('getGroceryOrders',{providerType : 2}, 1).toPromise()
  this.Orders = this.groceryorders['response']
  this.allorders = this.Orders['ongoingOrders']
    console.log(this.groceryorders['response']['ongoingOrders'] , '++++++++++++' , this.allorders);
}

filterorders(data){
  this.fiteredData = this.Orders[data]
  console.log(this.fiteredData)
  this.allorders = this.fiteredData
  console.log(this.allorders , '--------------------------')

}

}
