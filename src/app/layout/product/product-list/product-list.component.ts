import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service'
import {Router ,ActivatedRoute, NavigationStart} from '@angular/router'
import { Subscription } from 'rxjs';
export let browserRefresh = false;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  _id
  productData 
  imgUrl = this.service.imageUrl
  subscription: Subscription;
  constructor(private service : ServiceService, 
    private router: Router,
    private route:ActivatedRoute,
) {
  this.subscription = router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      browserRefresh = !router.navigated;
      console.log("if")
      this.getProduct()
    }
});
 }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['id']) //log the value of id
      this._id = params['id']
    });
    this.getProduct()
  }
  getProduct(){
    this.service.post('getProductListForWeb',{sub_cat_id : this._id}, 0).subscribe(res => {
      this.productData = res['response']
    })
  }
  filterProduct(type) {
    console.log("filterProduct", type)
    this.service.post('getProductListForWeb',{sub_cat_id : this._id, type : type}, 0).subscribe(res => {
      this.productData = res['response']
    })
  }
}
