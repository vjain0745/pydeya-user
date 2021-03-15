import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-profile-left',
  templateUrl: './order-profile-left.component.html',
  styleUrls: ['./order-profile-left.component.css']
})
export class OrderProfileLeftComponent implements OnInit {

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
}
