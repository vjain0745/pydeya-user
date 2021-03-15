import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openOrder() {
    document.getElementById("orderdetail").style.width = "100%";
    document.getElementById("orderdetail").style.height = "45%";
    document.getElementById("orderdetail").classList.add("active");
    // document.getElementById("notify").style.marginLeft = "400px";
    document.getElementById("close-bn").style.display= "block"; 
  }
    
  closeOrder() {
    document.getElementById("orderdetail").style.width = "0";
    document.getElementById("orderdetail").style.height = "0";
    document.getElementById("orderdetail").classList.remove("active");
    document.getElementById("notifyme").style.marginLeft= "0";
    document.getElementById("close-bn").style.display= "none"; 
  }

  openOrdercancl() {
    document.getElementById("orderdetailcancl").style.width = "100%";
    document.getElementById("orderdetailcancl").style.height = "45%";
    document.getElementById("orderdetailcancl").classList.add("active");
    // document.getElementById("notify").style.marginLeft = "400px";
    document.getElementById("close-bn1").style.display= "block"; 
  }
     
  closeOrdercancl() {
    document.getElementById("orderdetailcancl").style.width = "0";
    document.getElementById("orderdetailcancl").style.height = "0";
    document.getElementById("orderdetailcancl").classList.remove("active");
    document.getElementById("notifyme").style.marginLeft= "0";
    document.getElementById("close-bn1").style.display= "none"; 
  }
}
