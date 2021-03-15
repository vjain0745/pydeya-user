import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service'
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { $ } from 'protractor';
declare var $ : any
@Component({
  selector: 'app-ecommerce-payment-login',
  templateUrl: './ecommerce-payment-login.component.html',
  styleUrls: ['./ecommerce-payment-login.component.css']
})
export class EcommercePaymentLoginComponent implements OnInit {
  addressForm : FormGroup
  searchWord : any = ''
  addressId = ''
  addressData : any = []
  isLoggedIn = 0
  isScheduleShow = 1
  deliveryTime :any =[]
  cardData : any = []
  imgUrl = this.service.imageUrl
  mobile_number
  password
  data :any = 
     [{
      amount: 0,
      img: "/shopping_cart.png",
      name: "N/A",
      offer_price: 0,
      product_id: "N/A",
      quantity: 0,
    }]
   
  constructor(private service : ServiceService,
    private formBuilder: FormBuilder
    ) { 
      this.addressForm = this.formBuilder.group({
        name : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*$'), Validators.maxLength(15)]],
        type : ['', []],
        contact_number : ['',[Validators.required]],
        landmark : ['',[Validators.required]],
        city : ['', [Validators.required]],
        state : ['', [Validators.required]],
        pin : ['', [Validators.required]]
      })
  }
  eccomerceCartId
  groceryCartId
  ngOnInit(): void {
    if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
      this.isLoggedIn = 1
    } else { 
      this.isLoggedIn = 0
    }
    console.log("=================> isLoggedIn <==================", this.isLoggedIn)
    this.getCart()
    this.getScheduleTime()
    this.getDeliveryAddress()
    this.getCardList()
  }

  grocerycartitems
  totalAmount
 async getCart(){
    if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
   
      this.grocerycartitems =   await this.service.get('getCartItemGrocery', 1).toPromise()
      this.groceryCartId = this.grocerycartitems['response']
      console.log(this.grocerycartitems['response']['cart_item'], '-----------')
       
      this.ecomercecartData = await this.service.get('getCartItem', 1).toPromise()
      console.log(this.ecomercecartData['response']['cart_item'] , '++++++++++++');
      this.eccomerceCartId = this.ecomercecartData['response']

      this.data = [this.ecomercecartData['response']['cart_item'].concat(this.grocerycartitems['response']['cart_item'])][0]
      console.log(this.data);

      this.totalAmount =  this.eccomerceCartId['amount'] + this.groceryCartId['amount']

    } else {
      let arr = []
      let cartData = JSON.parse(localStorage.getItem('Cart'))
      for(let element of cartData){
        arr.push({product_id : element.product_id, quantity : element.quantity})
      }
      this.service.post('getExternalCart', {product_id : arr}, 0).subscribe(res =>{
        this.data.cart_item = res['response']['cart_item']
        this.data.total_amount = res['response']['total_amount']
      })
    }
  }
  loginPlaceOrder(){
    let cart_item =  localStorage.getItem('Cart');
    console.log(this.mobile_number, this.password, cart_item)
    this.service.post('loginPlaceOrder', {mobile_number : this.mobile_number, password : this.password, cart_item}, 0).subscribe(res => {
      console.log(res['response'])
      localStorage.setItem('token', res['response']['access_token'])
      localStorage.setItem('pydeyaUser', JSON.stringify(res['response']))
      this.isLoggedIn = 1
      this.getCart()
      window.location.reload()
    }, error => {
      this.service.error('Some thing went wrong')
    })
  }
  getScheduleTime(){
    this.service.post('getDeliveryTime',{},0).subscribe(res => {
      this.deliveryTime = res['response']
    })
  }
  changeStatus(status){
    console.log("changeStatus calling")
    this.isScheduleShow = status
  }
  saveAddress(){
    console.log("save address calling")
    this.service.post('addDeliveryAddress', this.addressForm.value, 1).subscribe(res => {
      this.getDeliveryAddress()
    })
  }
  openModel(){
    if(this.isLoggedIn == 0){
      this.service.error('Please Login first')
    } else {
      $('#myModal').modal('show')
    }
  }
  getDeliveryAddress(){
    if(this.isLoggedIn == 1) {
      this.service.get('getDeliveryAddress', 1).subscribe(res => {
        this.addressData = res['response']
      })
    } else {
      this.addressData = []
    }
  }
  addShippingAddress(){
    
    if(this.data.lemgth < 1){
      this.service.error('Your cart is empty')
      return
    }
    if(this.addressId == '' || this.addressId == null) {
      this.service.error('Please select delivery address')
      return
    } else {
      console.log(this.eccomerceCartId)
      this.service.post('addShippingAddress', {address_id : this.addressId, cart_id : this.eccomerceCartId['_id']}, 1).subscribe(res => {
        console.log("addShippingAddress done")
        this.service.success('Shipping address added successfully')
      })

      this.service.post('addShippingAddressGrocery', {address_id : this.addressId, cart_id : this.groceryCartId['_id']}, 1).subscribe(res => {
        console.log("addShippingAddress done")
        this.service.success('Shipping address added successfully')
      })
    }
  }
  checkRadio(event) {
    console.log(event, '------------')
    this.addressId = event
  }

  cartitems
  ecomercecartData
  async getCardList(){
    if(this.isLoggedIn == 1) {
      this.service.get('getCardList', 1).subscribe(res => {
        this.cardData = res['response']
      })
    } else {
      this.cardData = []
    }
  }
  placeOrder(customer_id, card_id) {
    console.log(customer_id, card_id, this.data._id, this.searchWord)
    if(this.addressId == '' || this.addressId == null) {
      this.service.error('Please select delivery address')
      return
    } 
    else if(this.data._id == undefined || this.data._id == null){
      this.service.error('Your cart is empty')
      return
    }
    else if(this.searchWord == '' || this.searchWord == null) {
      this.service.error('Please enter CVV')
      return
    }
    else if(this.searchWord.length > 3) {
      this.service.error('Please enter valid CVV')
      return
    } else {
      console.log("else comming")
      this.service.post('placeOrder',{cart_id : this.data._id, customer_id, card_id, type : 1},1).subscribe(res => {
        console.log("payment done")
        this.service.success('Your order has been successfully placed.')
        this.service.navigatePage('/login-home')
      })
    }
  }
  COD() {
    console.log(this.data,'-----eccomerceCartId    groceryCartId-----------')

    if(this.addressId == '' || this.addressId == null) {
      this.service.error('Please select delivery address')
      return
    } 
    else if(this.data.length < 1){
      this.service.error('Your cart is empty')
      return
    } else {
      // this.service.post('makePayment', {payment_mode : 1, cart_id : this.eccomerceCartId},1).subscribe(res =>{
      //   console.log("COD Done")
      // })
      // this.service.post('makePaymentGrocery', {payment_mode : 1, cart_id : this.groceryCartId },1).subscribe(res =>{
      //   console.log("COD Done")
      // })
    }
  }
  codPayment() {
    console.log(this.data,'----------------')

    if(this.addressId == '' || this.addressId == null) {
      this.service.error('Please select delivery address')
      return
    } 
    else if(this.data.length < 1){
      this.service.error('Your cart is empty')
      return
    } else {
      console.log("else comming")
      this.service.post('placeOrder', {cart_id : this.eccomerceCartId['_id'] , providerType : 1},1).subscribe(res =>{
        console.log("COD Done")
      })
      this.service.post('placeOrderGrocery',
       { cart_id : this.groceryCartId['_id'],  providerType : 2},1).subscribe(res =>{
        console.log("COD Done")
      })
        this.service.success('Your order has been successfully placed.')
        this.service.navigatePage('/')
      
    }
  }
}
