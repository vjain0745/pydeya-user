


import { Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;
@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  
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
        items: 3
      },
      1024: {
      items: 6
      }
    },
    nav: true
    }   
    topOffers: OwlOptions = {
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
          items: 3
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
   
    // setTimeout(function(){
    //   $('.screen_carousel').swiper({
    //     mode:'horizontal',
    //     slidesPerView: 4,
    //     loop: true,
    //     speed: 2000,
    //     autoplay: true,
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     pagination: false,
    //     centeredSlides: true,
    //     paginationClickable: true,
    //     nextButton: '.arrow-right',
    //     prevButton: '.arrow-left',
    //     center: true,
    //     keyboardControl: true,
    //     coverflow: {
    //         rotate: 0,
    //         stretch: 90,
    //         depth: 200,
    //         modifier: 1,
    //         slideShadows : false
    //     },
    //     breakpoints: {
    //       576: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //       },
    //       768: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //       },
    //       1024: {
    //         slidesPerView: 4,
    //         spaceBetween: 45,
    //       },
    //     }
    // });
    // } , 100); 

    setTimeout(() => {
      $(".tp-banner").revolution({

        sliderType:"standard",
      
        sliderLayout:"auto",
      
        delay:9000,
      
        minHeight:500,
      
        gridwidth:0,
      
        navigationType:"bullet",
      
        navigationArrows:"solo",
      
        navigationStyle:"preview4",
      
        gridheight:500		
      
      });

      $('.tp-banner-full').show().revolution({

        dottedOverlay:"none",
      
        delay:7000,
      
        startwidth:1200,
      
        startheight:500,
      
        navigationType:"bullet",
      
        navigationArrows:"solo",
      
        navigationStyle:"preview4",
      
        parallax:"mouse",
      
        parallaxBgFreeze:"on",
      
        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
      
        keyboardNavigation:"on",						
      
        shadow:0,
      
        fullWidth:"on",
      
        fullScreen:"off",
      
        shuffle:"off",						
      
        autoHeight:"off",						
      
        forceFullWidth:"on",	
      
        fullScreenOffsetContainer:""	
      
      });
    }, 500)

    
  //   $(window).on('load',function(){
  //     $('#myModal').modal('show');
  // });
  }

}
