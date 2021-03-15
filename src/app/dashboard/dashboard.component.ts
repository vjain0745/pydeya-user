import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  telInputObject(obj) {
    console.log(obj);
    obj.setCountry('in');
  }
  ngOnInit(): void {
  }

}
