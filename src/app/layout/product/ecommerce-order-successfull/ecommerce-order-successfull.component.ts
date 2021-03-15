import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ecommerce-order-successfull',
  templateUrl: './ecommerce-order-successfull.component.html',
  styleUrls: ['./ecommerce-order-successfull.component.css']
})
export class EcommerceOrderSuccessfullComponent implements OnInit {
  treandingProduct: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    margin:10,
    navSpeed: 700,
    
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
      items: 1
      },
      768: {
        items: 3
      },
      1024: {
      items: 6
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
