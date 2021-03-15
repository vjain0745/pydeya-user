import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl: any = environment.baseUrl;
  imageUrl: any = environment.imageUrl;
  headers: any;

  constructor( private routetingPage: Router, private http: HttpClient, private toastr : ToastrService) {
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : localStorage.getItem('token')
    });
   }
   navigatePage(page) {
    this.routetingPage.navigate(['/' + page]);
  }

  post(url, data, isHeader){
    if(isHeader == 1) {
      console.log("header", this.headers)
      return this.http.post(this.baseUrl+url, data, {headers: new HttpHeaders({'access_token' : localStorage.getItem('token')})})
    } else {
      return this.http.post(this.baseUrl+url, data)
    }
  }



  get(url, isHeader){
    if(isHeader == 1){
      return this.http.get(this.baseUrl+url, {headers: new HttpHeaders({'access_token' : localStorage.getItem('token')})})
    } else {
      return this.http.get(this.baseUrl+url)
    }
  }

  success(message){
    this.toastr.success( message, 'Success')
  }

  error(message){
    this.toastr.error( message, 'Error')
  }

}
