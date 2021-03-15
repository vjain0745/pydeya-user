import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service'
import {Router ,ActivatedRoute} from '@angular/router'
declare var $:any;
declare  var exzoom:any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // exzoom;
  _id
  cartArr : any = []
  likeStatus = 0
  productData 
  imgUrl = this.service.imageUrl
  constructor(
    private service : ServiceService, 
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Cart") !=  '' && localStorage.getItem("Cart") !=  null){
      this.cartArr = JSON.parse(localStorage.getItem("Cart"))
      console.log(this.cartArr)
      console.log(typeof(this.cartArr))
      
    }
    // setTimeout(function(){ 
    //   $('.container1').imagesLoaded( function() {
    //     $("#exzoom").exzoom({
    //         autoPlay: true,
    //     });
    //     $("#exzoom").removeClass('hid_den')
    //   });
  
    //  $(".overlay").click(function(){
    //     $(".new-one").hide();
    //     $(".overlay").removeClass("ForDropdown"); 
    //   });
      $(".quantity-plus").click(function(){     
        $("#qnt").val(Number($("#qnt").val())+1);
       });
      $(".quantity-minus").click(function(){
      if($("#qnt").val()>1)
      $("#qnt").val(Number($("#qnt").val())-1);     
      });
    // }, 100);
    this.route.params.subscribe(params => {
      // console.log(params['id']) //log the value of id
      this._id = params['id']
    });
    this.getProduct()
  }
  productImage:any=[]
  getProduct(){
    this.service.post('getProductDetails',{product_id : this._id}, 0).subscribe(res => {
      this.productData = res['response']
      this.productImage = this.productData ? this.productData.product_other_image : []
      console.log(this.productData)
      // this.initiateZoom()
      $('.container1').imagesLoaded( function() {
        $("#exzoom").exzoom({
            autoPlay: true,
        });
        $("#exzoom").removeClass('hid_den')
      });
    })
  }

  // incrementdecrement(data, value) {
  //   if (value == 1) {
  //     data.quantity++;
  //   }
  //   else {
  //     data.quantity--;
  //   }  
  // }

  initiateZoom (){
    // setTimeout(function(){ 
        $('.container1').imagesLoaded( function() {
          $("#exzoom").exzoom({
              autoPlay: false,
          });
          $("#exzoom").removeClass('hid_den')
        });
    
      //  $(".overlay").click(function(){
      //     $(".new-one").hide();
      //     $(".overlay").removeClass("ForDropdown"); 
      //   });
      //   $(".quantity-plus").click(function(){     
      //     $("#qnt").val(Number($("#qnt").val())+1);
      //    });
      //   $(".quantity-minus").click(function(){
      //   if($("#qnt").val()>1)
      //   $("#qnt").val(Number($("#qnt").val())-1);     
      //   });
    // }, 1500);
  }
  like() {
    console.log("calling",  $("#qnt").val())
    if(this.likeStatus == 0){
      this.likeStatus = 1
    } else {
      this.likeStatus = 0
    }
  }
  addToCart(){
    console.log("add to cart calling")
    let data = {
      "product_id": this._id,
      "quantity" :  $("#qnt").val(),
      "price" :  $("#qnt").val() * this.productData.sellingPrice
    }

    if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
     console.log("Exit token api calling")
      this.service.post('addToCart', data, 1).subscribe(res => {
        console.log("success")
        this.service.navigatePage('/product/my-ecommerce-cart')
      }, error => {
        console.log("error")
      }) 
    }
    for(var i=0; i<this.cartArr.length; i++){
      if(this.cartArr[i].product_id === this._id){
          this.cartArr.splice(i,1);
          break;
      }
   }
  //  console.log("previous cart >>>>>>>>>>>>>>>>",this.cartArr)
  //  console.log("commind data==================", data)

   this.cartArr.push(data)
  //  console.log("all data in cart================",this.cartArr)
   localStorage.setItem("Cart", JSON.stringify(this.cartArr));

   this.service.navigatePage('product/my-ecommerce-cart')
  }
  buyNow(){
    console.log("buy now")
    if(localStorage.getItem("Cart") !=  '' && localStorage.getItem("Cart") !=  null){
      console.log("send to buy page")
      this.service.navigatePage('/product/my-ecommerce-cart')
    } else {
      console.log("cart empty")
      this.service.error('Your Cart is empty')
    }
  }
}
