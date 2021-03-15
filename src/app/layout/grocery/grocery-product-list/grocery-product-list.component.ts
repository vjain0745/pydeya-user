import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../../service/service.service'
import {environment} from '../../../../environments/environment'
import { Router, RouterModule , Params } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { Location } from "@angular/common";
import { compileNgModule } from '@angular/compiler';

declare var $:any;
@Component({
  selector: 'app-grocery-product-list',
  templateUrl: './grocery-product-list.component.html',
  styleUrls: ['./grocery-product-list.component.css']
})
export class GroceryProductListComponent implements OnInit {
id
allproduct
catdata
baseurl
routes
productdetails
value = 1
values
allcartData
fullName: string = "Hello JavaTpoint";    
updatevalueinmodal = 0
pricing
user
  constructor(private location: Location, private route : ActivatedRoute  ,  private service : ServiceService , private router: Router ) { 
   
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.catdata = params['catdata'].toUpperCase()
      console.log(this.id);
      this.allproducts()
      this.cartdata()
      
    });

  }

  ngOnInit() {

    this.user = localStorage.getItem('pydeyaUser')
    this.values = 3
    this.baseurl = environment.imageUrl
    console.log(this.baseurl)

  
  }

addquant(data){
  console.log(data ,"===================")
  console.log('0000000');
  
  var newqty = data.quantity + 1
  var newamt = data.amount 
  this.service.post('addToCartGrocery', { product_id : data.product_id , quantity : newqty,
  measurement : data.measurement, amount : newamt }, 1).subscribe(
 data => {
  //  this.allproduct = data['response']
 console.log(data['response'])

 this.cartdata()

 })
}

subquant(data){
console.log(data);
var newqty = data.quantity - 1
var newamt = data.amount
this.service.post('addToCartGrocery', { product_id : data.product_id , quantity : newqty,
measurement : data.measurement, amount : newamt }, 1).subscribe(
data => {
//  this.allproduct = data['response']
console.log(data['response'])

this.cartdata()

})
}


allproducts(){
  this.service.post('getGroceryProducts', { sub_cat_id: this.id}, 0).subscribe(
    data => {
      this.allproduct = data['response']
    console.log(data['response'])
      })
}

selectedProduct(data){
  this.productdetails = data
  this.cartdata()
  console.log(this.productdetails ,  this.allcartData)
 if( this.allcartData.length > 0)
 {
    var newdata =  this.allcartData.filter((dataa)=>{
    return dataa.product_id == this.productdetails._id
  })
if(newdata.length>0){
  this.updatevalueinmodal = newdata[0].quantity
  console.log(this.updatevalueinmodal)
}else{
  this.updatevalueinmodal = 0
  console.log(this.updatevalueinmodal ,'---------------------------')

}
 
}
}


cart_id
cartdata(){
  this.service.get('getCartItemGrocery', 1).subscribe(
 data => {
   this.cart_id = data['response']
   this.allcartData = data['response']['cart_item']
   this.pricing = data['response']['priceDetails']
 console.log(this.allcartData , data['response']['priceDetails'])
}, err=>{
  console.log(err);
  
})
}

matchProducts(){
  this.allproduct.filter((data)=>{

    
  })
  this.allcartData
}

productquantity: number = 1
sub(){
  console.log(this.updatevalueinmodal)
  if(this.updatevalueinmodal == 1){
    this.service.post('removeFromCartGrocery', { product_id : this.productdetails._id }, 1).subscribe(
     data => {
            this.cartdata()
            this.updatevalueinmodal = 0

       },err =>{
         console.log(err)
       });
  }
  else{
    this.updatevalueinmodal -= 1 
this.service.post('addToCartGrocery', { product_id : this.productdetails._id , quantity : this.updatevalueinmodal,
  measurement : this.productdetails.measurement, amount : this.productdetails.amount}, 1).subscribe(
 data => {

  console.log(data['response'])
  this.cartdata()
 var newdata = data['response']['cart_item'].filter((dataa)=>{
   return dataa.product_id == this.productdetails._id
 })
 this.updatevalueinmodal = newdata[0].quantity
 console.log(this.updatevalueinmodal)
});
  }
}


add(){
  // this.updatevalueinmodal += 1
  

  this.service.post('addToCartGrocery', { product_id : this.productdetails._id , quantity : this.updatevalueinmodal + 1,
    measurement : this.productdetails.measurement, amount : this.productdetails.amount}, 1).subscribe(
   data => {
   console.log(data['response'])
   this.cartdata()
  var newdata = data['response']['cart_item'].filter((dataa)=>{
    return dataa.product_id == this.productdetails._id
  })
  if(newdata.length>0){
    this.updatevalueinmodal = newdata[0].quantity
    console.log(this.updatevalueinmodal)
  }


  });
}

placeorder(){
  // console.log(this.cart_id._id)
  // JSON.parse(this.user)._id
  // this.service.post('placeOrderGrocery', {cart_id : this.cart_id._id, providerType : 2 } , 1).subscribe(
  //   data => {
  //     console.log(data)
        $('#view-address').modal('hide');
  //   })

  this.router.navigateByUrl('/product/ecommerce-payment-login')
}

}
