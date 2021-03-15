import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service'
declare var $:any;
import * as _ from 'lodash';
import { __await } from 'tslib';

@Component({
  selector: 'app-my-ecommerce-cart', 
  templateUrl: './my-ecommerce-cart.component.html',
  styleUrls: ['./my-ecommerce-cart.component.css']
})
export class MyEcommerceCartComponent implements OnInit {
  cartData : any = []
  coupanData
  data
  datas :any = 
   [{
      amount: 0,
      img: "/shopping_cart.png",
      name: "N/A",
      offer_price: 0,
      product_id: "N/A",
      quantity: 0,
    }]
  
  imageUrl = this.service.imageUrl
  cartitems
  ecomercecartData
  totalCart
  eccomerceAmount
  
  constructor(private service : ServiceService) { }
  ngOnInit(): void {
    $(".quantity-plus").click(function(){     
      $("#qnt").val(Number($("#qnt").val())+1);
     });
    $(".quantity-minus").click(function(){
    if($("#qnt").val()>1)
    $("#qnt").val(Number($("#qnt").val())-1);     
    });
    this.cartData = JSON.parse(localStorage.getItem("Cart"))
    console.log(this.cartData)
    this.getProductData()
    this.getCoupan()
  }
  openCoupan() {
    document.getElementById("coupan").style.width = "380px";
    document.getElementById("coupan").classList.add("active");
    // document.getElementById("notify").style.marginLeft = "400px";
    document.getElementById("close-bn").style.display= "block"; 
  }
  
  closeCoupan() {
    document.getElementById("coupan").style.width = "0";
    document.getElementById("coupan").classList.remove("active");
    document.getElementById("notify").style.marginLeft= "0";
    document.getElementById("close-bn").style.display= "none"; 
  }

  eccomerce
  grocery
  totalAmount

  async getProductData() {
    if(localStorage.getItem('token') != null && localStorage.getItem('token') != '') {

      // if(){
      //   this.data = this.data
      // }
      this.cartitems =   await this.service.get('getCartItemGrocery', 1).toPromise()
      console.log(this.cartitems['response']['cart_item'], '-----------')
      this.eccomerce = this.cartitems['response']
       
      this.ecomercecartData = await this.service.get('getCartItem', 1).toPromise()
      console.log(this.ecomercecartData['response']['cart_item'] , '++++++++++++');
      this.grocery = this.ecomercecartData['response']
      
      this.data = [this.ecomercecartData['response']['cart_item'].concat(this.cartitems['response']['cart_item'])][0]
      console.log(this.data);
      this.totalAmount = this.grocery['amount'] + this.eccomerce['amount']

      if(this.data.length == 0){
        console.log();
        
        this.data = this.datas
      }

    } else {
      let arr = []
      for(let i = 0 ;i<this.cartData.length ;i++){
        arr.push(this.cartData[i].product_id)
      }
      console.log(arr)
      this.service.post('getCartDetails', {item_id : this.cartData}, 0).subscribe(res => {
        this.data = res['response']
      })
    }
  }
  removeFromCart(id , ele){
    console.log("removeFromCart calling", id , ele)
    if(localStorage.getItem('token') != null && localStorage.getItem('token') != '') {
      console.log("remove using api")
      this.service.post('removeFromCartGrocery', {product_id : id}, 1).subscribe(res => {
        this.getProductData()
        window.location.reload();
      }, error => {
        this.service.error('Something went wrong')
      })
    } else {
      console.log("remove from local storage")
      let data =  _.remove(this.cartData, function (e) {
          return e.product_id == id;
      });
      console.log(this.cartData)
      console.log(this.cartData.length)
      if(this.cartData.length == 0){
        localStorage.removeItem('Cart')
        window.location.reload();
        this.getProductData()
      } else {
        localStorage.setItem("Cart", JSON.stringify(this.cartData));
        window.location.reload();
        this.getProductData()
      }
    }
  }
  getCoupan(){
    console.log("getCoup calling")
    this.service.get('getCoupan',1).subscribe(res => {
      this.coupanData = res['response']
      console.log(this.coupanData)
    })
  }
  applyCoupan(discount_percentage, coupan_code){
    console.log("applyCoupan calling", discount_percentage, coupan_code, this.data._id)
    this.data.total_amount = this.data.total_amount - (this.data.total_amount * discount_percentage)/100 
    console.log(this.data.total_amount)
    this.service.post('applyCoupan', {cart_id : this.data._id, coupan_code, amount : this.data.total_amount}, 1).subscribe(res => {
      this.data.total_amount = res['response']['amount']
      this.service.success(res['message'])
    }, error => {
      this.service.error('Something went wrong')
    })
  }

  placeOrder(){
    console.log("placeOrder")
    console.log(this.data , this.cartitems ,this.ecomercecartData)
    console.log();
    
    if(localStorage.getItem('token') != null && localStorage.getItem('token') != ''){
      console.log("login exist", this.data.length)
      if( this.data.length < 1){
        this.service.error('Your cart is empty')
      } else {
        this.service.navigatePage('/product/ecommerce-payment-login/')
      }
    } else {
      if( this.data.length < 1){
        this.service.error('Your cart is empty')
      } else {
        this.service.error('Please login first')
        this.service.navigatePage('/product/ecommerce-payment-login/')
      }
    }
  }
}
   