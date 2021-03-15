import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-productlistgrid-left',
  templateUrl: './productlistgrid-left.component.html',
  styleUrls: ['./productlistgrid-left.component.css']
})
export class ProductlistgridLeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.cd-filter-block h6').on('click', function(){
      $(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
    })
    $("#example").ionRangeSlider({
      skin: "big",
      min: 0,
      max: 10000,
      from: 1000,
      to: 9000,
      type: 'double',
      prefix: "$",
      grid: true,
      grid_num: 10
  });
  }

}
