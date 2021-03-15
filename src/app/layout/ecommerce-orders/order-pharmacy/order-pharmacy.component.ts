import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-pharmacy',
  templateUrl: './order-pharmacy.component.html',
  styleUrls: ['./order-pharmacy.component.css']
})
export class OrderPharmacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public profileImgPath;
  profileImgURL: any;

profileImg(files) {
    var reader = new FileReader();
    this.profileImgPath = files; 
    reader.readAsDataURL(files[0]);    
    reader.onload = (_event) => { 
      this.profileImgURL = reader.result; 
    }
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
} 
