import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service'
import { GroceryProductListComponent } from '../../grocery/grocery-product-list/grocery-product-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {environment} from '../../../../environments/environment'
import { ToastrService } from 'ngx-toastr';

declare var $
@Component({
  selector: 'app-my-order-status',
  templateUrl: './my-order-status.component.html',
  styleUrls: ['./my-order-status.component.css']
})
export class MyOrderStatusComponent implements OnInit {
  groceryorders
  path
  values
  delivery_address
  url = environment.imageUrl
  vipul:boolean = true
  trackData
  cancel_reason
  
  constructor(private service : ServiceService ,  private router: Router  ,private route: ActivatedRoute ,  private toastr: ToastrService) { }

  ngOnInit(): void {


    $(document).on('click', 'input[type="checkbox"]', function() {      
      $('input[type="checkbox"]').not(this).prop('checked', false);      
  });



    this.path =  this.route.snapshot.params.id;
    // console.log(this.path , "567890")
    
    this.groceryorders = this.service.post('getGroceryOrderDetails',{order_id : this.path }, 1).subscribe((data)=>{
    this.values = data['response']['orderaData']
    this.delivery_address =  data['response']['delivery_address']
    })
    this.trackingData()
  }

  trackingData(){
    this.groceryorders = this.service.post('getTrackingData',{order_id : this.path }, 1).subscribe((data)=>{
      this.trackData = data['response']['orderStatus']
    })
  }

  checkValue(event: any){
  this.cancel_reason=   event.target.value
 }

  cancelOrder(){
    this.groceryorders = this.service.post('cancelOrder',{order_id : this.path , cancel_reason : this.cancel_reason}, 1).subscribe((data)=>{   
      this.toastr.success(data['message'])  
      this.router.navigateByUrl('/ecommerce-order/my-ecommerce-order');
    })
  }
}
