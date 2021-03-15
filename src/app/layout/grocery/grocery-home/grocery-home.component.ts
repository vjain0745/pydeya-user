import { Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;

@Component({
  selector: 'app-grocery-home',
  templateUrl: './grocery-home.component.html',
  styleUrls: ['./grocery-home.component.css']
})
export class GroceryHomeComponent implements OnInit {

  todaysave: OwlOptions = {
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
        items: 4
      },
      1024: {
      items: 6
      }
    },
    nav: true
  }
  topBrands: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    margin:10,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: { 
      0: {
      items: 1
      },
      768: {
        items: 4
      },
      1024: {
      items: 6
      }
    },
    nav: true
    }   
    todaydeal: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false,
      navSpeed: 700,
      margin:10,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
        items: 1
        },
        768: {
          items: 4
        },
        1024: {
        items: 4
        }
      },
      nav: false
      } 
  constructor() { }
    getSlide() {
      var wW = $(window).width();
      if (wW < 601) {
          return 1;
      }
      return 3;
  }
  ngOnInit() {
   

    setTimeout(() => {
      // $(".tp-banner1").revolution({

      //   sliderType:"standard",
      
      //   sliderLayout:"auto",
      
      //   delay:9000,
      
      //   minHeight:400,
      
      //   gridwidth:0,
      
      //   navigationType:false,
      
      //   navigationArrows:false,
      
      //   navigationStyle:false,
      
      //   gridheight:400		
       
      // });

    }, 500)

    
  //   $(window).on('load',function(){
  //     $('#myModal').modal('show');
  // });
  }

}
