import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ServiceService} from '../../../service/service.service'
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = 0
  catData
  eccomerce = false
  grocery = false
  public error = null;
  name: any
  DOB: any
  path
  gender: any
  type: any
  ngOnInit() {
    this.path = this.router.url.slice(1,8)
    console.log(this.path,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    if(this.path == 'grocery')
    {
      this.grocery = true
    }
    else{
      this.eccomerce =true
    }
    console.log("calling")
    this.getCatData()
    this.getgroceryCatdata()
    $(function () {
      $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        endDate: new Date(),
      }).datepicker('update', new Date());
    });

    let time = 30;
      const timeValue = setInterval((interval) => {
        $('#countdown').text(time--);
        if (time < 0) {
          clearInterval(timeValue);
        }
      }, 1000);



    setTimeout(() => {

      $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
          id = $(this).attr("id"),
          name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
      });
      $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
      }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
      });
      $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
          $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
      });
      $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
      });

      // $(".profile-next").click(function () {
      //   $("#creater-profile").hide();
      //   $('.modal-backdrop').remove();
      // });
      // $(".profile-payment").click(function () {
      //   $("#creater-profile-deliver").hide();
      //   $('.modal-backdrop').remove();
      // });
      $(".foget-password").click(function () {
        $("#login").hide();
        $('.modal-backdrop').remove();
      });
      $(".change-password").click(function () {
        $("#forgot").hide();
        $('.modal-backdrop').remove();
      });
      $(".login-modal").click(function () {
        $("#change-pass").hide();
        $("#login").show();
        $('.modal-backdrop').remove();
      });
      $(".register").click(function () {
        $("#login").hide();
        $('.modal-backdrop').remove();
      });
      $("#otp").click(function () {
        //$("#otp").hide();
        $('.modal-backdrop').remove();
      });
      $("#otp").click(function () {
        //$("#otp").hide();
        $('.modal-backdrop').remove();
      });
      $(".create-profile").click(function () {
        $("#set-password-account").hide();
        $('.modal-backdrop').remove();
      });

      $("#awr").click(function(){
        //$("#set-password-account").hide();
        $('.modal-backdrop').remove();
      });

    $('.otp .otp-labl .otp1').keyup(function (e) {
      var key = e.which ||  e.keyCode || e.charCode;
      if (key == 8 || key == 46) {
        let is_first_child = $($(this).parent('.otp-labl')).is(':first-child');
        let is_last_child = $($(this).parent('.otp-labl')).is(':last-child');
        if (!is_first_child)
          $(this).parent('.otp-labl').prev('.otp-labl').children('.otp1').trigger("select");
          return;
        }
        $(this).parent('.otp-labl').next('.otp-labl').children('.otp1').trigger("select");
        if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
      });
    }, 200);

    $(function () {
      $('ul.tabs li:first').addClass('active');
      $('.block article').hide();
      $('.block article:first').show();
      $('ul.tabs li').on('click', function () {
        $('ul.tabs li').removeClass('active');
        $(this).addClass('active')
        $('.block article').hide();
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).show();
        return false;
      });
    })
   if(localStorage.getItem("pydeyaUser")!=  '' && localStorage.getItem("pydeyaUser") !=  null){
      this.isLoggedIn = 1
      this.name = JSON.parse(localStorage.getItem("pydeyaUser")).name
   } else {
     this.isLoggedIn = 0
   }
   console.log("IS uder login", this.isLoggedIn)
  }

  changetype(){

  }

  public profileImgPath;
  profileImgURL: any;
  sendImg : any;
  profileImg(files) {
    var reader = new FileReader();
    this.profileImgPath = files;
    this.sendImg =  this.profileImgPath[0]
    console.log(this.sendImg)
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.profileImgURL = reader.result;
    }
  }

  public form = {
    mobile_number: null,
    country_code: '+91',
    latitude: 45.43,
    longitude: 12.54,
    device_type: 2,
    device_token: "defrewrtetw34465478utgeth",
    password: null
  };


  constructor(private http:HttpClient, private router: Router, private toastr: ToastrService, private service : ServiceService) { }
  onSubmit() {
    this.service.post('UserLogin', this.form, 0).subscribe(
      data => {
        if (data && data['statuscode'] == 403) {
          this.toastr.error(data['message'])
        }
        else {
          this.toastr.success(data['message'])
          localStorage.setItem('pydeyaUser', JSON.stringify(data['response']))
          localStorage.setItem('token',data['response']['access_token'] )
          this.isLoggedIn = 1
          this.name = data['response']['name']
          $('#login').modal('hide')
          // this.router.navigateByUrl('/dashboard');
        }
      }
    )
  }

firstOtp:any = null
secoundOtp: any = null
thirdOtp: any = null
forthOtp: any = null

onotpforgotSubmit(){
  this.password = null
  this.password1 = null
  let userdata = JSON.parse(localStorage.getItem('pydeyaUser'));
  let formdata = {
   otp : this.firstOtp + this.secoundOtp + this.thirdOtp + this.forthOtp,
   mobile_number : userdata.mobile_number,
   country_code : userdata.country_code
  }

   this.service.post('UserVerifyOtp', formdata, 0).subscribe(
     forgotverifyotp => {
       if(forgotverifyotp && forgotverifyotp['statuscode'] == 403){
         this.toastr.error(forgotverifyotp['message'])
        // debugger
       }

       else{
         $('#change-pass').modal('show')
         this.toastr.success(forgotverifyotp['message'])
         localStorage.setItem('pydeyaUser',JSON.stringify(forgotverifyotp['response']))
         $('#awr').modal('hide')
         $('#awr1').modal('hide')

         }
     }
   )
 }

 onotpSubmit(){

  this.password = null
  this.password1 = null
   let userdata = JSON.parse(localStorage.getItem('pydeyaUser'));
   let formdata = {
    otp : this.firstOtp + this.secoundOtp + this.thirdOtp + this.forthOtp,
    mobile_number : userdata.mobile_number,
    country_code : userdata.country_code
  }
    this.service.post('UserVerifyOtp', formdata, 0).subscribe(
      forgotverifyotp => {
        if (forgotverifyotp && forgotverifyotp['statuscode'] == 403) {
          this.toastr.error(forgotverifyotp['message'])
         // debugger
        }
        else{
          $('#set-password-account').modal('show')
          this.toastr.success(forgotverifyotp['message'])
          localStorage.setItem('pydeyaUser',JSON.stringify(forgotverifyotp['response']))
          $('#otp').modal('hide')
          }
      }
    )
  }


  public forgotpasswordForm = {
    mobile_number: null,
    country_code: '+91',
  };


  forgotpasswordSubmit() {

    this.firstOtp = null
    this.secoundOtp = null
    this.thirdOtp = null
    this.forthOtp = null
    this.service.post('UserForgotPassword', this.forgotpasswordForm, 0).subscribe(
      fpassworduser => {
        if(fpassworduser && fpassworduser['statuscode'] == 403){
          this.toastr.error(fpassworduser['message'])
          return
        }
          $('#awr').modal('show')
          this.toastr.success(fpassworduser['message'])
          localStorage.setItem('pydeyaUser',JSON.stringify(fpassworduser['response']))
          $('#forgot').modal('hide')

       // debugger
      },
      error => {
        console.log(error);
        //debugger
        this.toastr.error(error['message'])
      }
    )
  }


  password:any = null
  password1: any = null

  setforgotpasswordSubmit(){
    console.log("From forgot password")
    if (this.password !== this.password1) {
        this.toastr.error('Password mismatch')
        return
      }

    let userdata = JSON.parse(localStorage.getItem('pydeyaUser'));
    let formdata = {
     password : this.password,
     mobile_number : userdata.mobile_number,
     country_code : userdata.country_code
   }
     this.service.post('UserResetPassword', formdata, 0).subscribe(
       forgotsetpassword => {
         if(forgotsetpassword && forgotsetpassword['statuscode'] == 403){
           this.toastr.error(forgotsetpassword['message'])
          // debugger
         }
         else{
          // debugger
           $('#login').modal('show')
           this.toastr.success(forgotsetpassword['message'])
           localStorage.setItem('pydeyaUser',JSON.stringify(forgotsetpassword['response']))
           $('#change-pass').modal('hide')

           }
       }
     )
  }


  setprofilepasswordSubmit(){
    console.log("comming From signup")
    if (this.password !== this.password1) {
      this.toastr.error('Password mismatch')
      return
    }

    let userdata = JSON.parse(localStorage.getItem('pydeyaUser'));
    let formdata = {
    password : this.password,
    mobile_number : userdata.mobile_number,
    country_code : userdata.country_code
   }
     this.service.post('UserResetPassword', formdata, 0).subscribe(
       setprofilepassword => {
         if(setprofilepassword && setprofilepassword['statuscode'] == 403){
           this.toastr.error(setprofilepassword['message'])
          // debugger
         }

         else{
          // debugger
           $('#creater-profile').modal('show')
           this.toastr.success(setprofilepassword['message'])
           localStorage.setItem('pydeyaUser',JSON.stringify(setprofilepassword['response']))
           $('#set-password-account').modal('hide')

           }
       }
     )
  }



  public registerFormname = {
    mobile_number: null,
    country_code: '+91',
    latitude: 45.43,
    longitude: 12.54,
    device_type: 2,
    device_token: "defrewrtetw34465478utgeth",

  };

  onregisterSubmit(){

    this.firstOtp = null
    this.secoundOtp = null
    this.thirdOtp = null
    this.forthOtp = null
    this.service.post('UserSignUp', this.registerFormname, 0).subscribe(
      user => {
        if(user && user['statuscode'] == 403){

          // $('#otp').modal('show')
          this.toastr.error(user['message'])
          if(user && user['response'] && user['response']['is_otp_verified'] == 0){
            $('#login').modal('hide')
            localStorage.setItem('pydeyaUser',JSON.stringify(user['response']))
            localStorage.setItem('token',user['response']['access_token'] )
          }
        }
        else{

          $('#otp').modal('show')
          this.toastr.success(user['message'])
          localStorage.setItem('pydeyaUser',JSON.stringify(user['response']))
          $('#login').modal('hide')
          }
        //debugger
      },
      error => {
        console.log(error);
        //debugger
        this.toastr.error(error['message'])
      }
    )
    }


  selectGender(val) {
    this.gender = val
  }
  selectType(val) {
    if (val == 'Home') {
      this.type = 1
    }
    else if (val == 'Office') {
      this.type = 2
    }
    else if (val == 'Other') {
      this.type = 3
    }
  }
  houseName:any
  buildingTower:any
  locality:any
  district:any
  city:any
  Pincode:any
  alternateNo:any
  password2:any

  createProfile() {
    debugger
    let data = {
    name: this.name,
    gender: this.gender,
    dob: $('#datepicker').val(),
    house_no: this.houseName,
    building_tower: this.buildingTower,
    society_locality: this.locality,
    city: $('#sources').val(),
    pincode: this.Pincode,
    district: this.district,
    type: this.type,
    // profile_image:this.profileImgPath

  }
  if(data.name == '' || data.name == undefined){
    this.toastr.error('Name required')
    return
  }
  if(data.gender == '' || data.gender == undefined){
    this.toastr.error('Gender required')
    return
  }
  if(data.dob == '' || data.dob == undefined){
    this.toastr.error('DOB required')
    return
  }
  if(data.house_no == '' || data.house_no == undefined){
    this.toastr.error('House no required')
    return
  }
  if(data.building_tower == '' || data.building_tower == undefined){
    this.toastr.error('Building No required')
    return
  }
  if(data.society_locality == '' || data.society_locality == undefined){
    this.toastr.error('Society required')
    return
  }
  if(data.city == '' || data.city == undefined){
    this.toastr.error('City required')
    return
  }
  if(data.pincode == '' || data.pincode == undefined){
    this.toastr.error('Pin code required')
    return
  }
  if(data.district == '' || data.district == undefined){
    this.toastr.error('District  required')
    return
  }
  if(data.type == '' || data.type == undefined){
    this.toastr.error('Type required')
    return
  }
  let userdata = JSON.parse(localStorage.getItem('pydeyaUser'));
let formd = new FormData()
formd.append('name', data.name)
formd.append('profile_image', this.sendImg)
formd.append('gender', data.gender)
formd.append('dob', data.dob)
formd.append('house_no', data.house_no)
formd.append('building_tower', data.building_tower)
formd.append('society_locality', data.society_locality)
formd.append('city', data.city)
formd.append('pincode', data.pincode)
formd.append('district', data.district)
formd.append('type', data.type)
formd.append('user', userdata._id)
    this.service.post('UserProfileCreationNew', formd, 0).subscribe(
      usercreate => {
        debugger
        if (usercreate && usercreate['statuscode'] == 403) {
          this.toastr.error(usercreate['message'])
        }
        else {
          $('#creater-profile-deliver').modal('hide')
          $('#creater-profile-payment').modal('show')
          // this.toastr.success(usercreate['message'])
          // this.router.navigate(['/dashboard'])
        }
      },
      error => {
        console.log(error);
        debugger
        this.toastr.error(error['message'])
      }
    )
}

  onCountryChange(event) {
    console.log("event calling", event.dialCode)
  }
  resetForm(){
    console.log("reset calling")
    this.forgotpasswordForm = {
      mobile_number : null,
      country_code : "+91"
    }
  }
  clearCreateAccount() {
    console.log("clear create account")
     this.registerFormname = {
      mobile_number: null,
      country_code: '+91',
      latitude: 45.43,
      longitude: 12.54,
      device_type: 2,
      device_token: "defrewrtetw34465478utgeth",
    };
  }
  resendOtp () {
    this.firstOtp = null
    this.secoundOtp = null
    this.thirdOtp = null
    this.forthOtp = null
    if(this.forgotpasswordForm.mobile_number == null || this.forgotpasswordForm.mobile_number == '' ) {
      this.forgotpasswordForm.mobile_number = (JSON.parse(localStorage.getItem('pydeyaUser'))).mobile_number
    }
    this.service.post('UserForgotPassword',{mobile_number : JSON.parse(localStorage.getItem('pydeyaUser')).mobile_number, country_code : '+91'}, 0).subscribe(
      fpassworduser => {
        if(fpassworduser && fpassworduser['statuscode'] == 403){
          this.toastr.error(fpassworduser['message'])
          return
        }
          $('#awr1').modal('show')
          this.toastr.success(fpassworduser['message'])
          localStorage.setItem('pydeyaUser',JSON.stringify(fpassworduser['response']))
          $('#awr').modal('hide')
          $('#otp').modal('hide')
       // debugger
      },
      error => {
        console.log(error);
        //debugger
        this.toastr.error(error['message'])
      }
    )
  }
  nextCall() {
    console.log("Next calling")
    if(this.name == '' || this.name == undefined){
      this.toastr.error('Name required')
      return
    }
    if($('#datepicker').val() == '' || $('#datepicker').val() == undefined){
      this.toastr.error('DOB required')
      return
    }
    if(this.gender == '' || this.gender == undefined){
      this.toastr.error('Gender required')
      return
    }

    $('#creater-profile-deliver').modal('show')
    $('#creater-profile').modal('hide')
  }
  resendOtpSignUp () {
    console.log("resend from signup")
    this.firstOtp = null
    this.secoundOtp = null
    this.thirdOtp = null
    this.forthOtp = null
    if(this.forgotpasswordForm.mobile_number == null || this.forgotpasswordForm.mobile_number == '' ) {
      this.forgotpasswordForm.mobile_number = (JSON.parse(localStorage.getItem('pydeyaUser'))).mobile_number
    }
    this.service.post('UserForgotPassword',{mobile_number : JSON.parse(localStorage.getItem('pydeyaUser')).mobile_number, country_code : '+91'}, 0).subscribe(
      fpassworduser => {
        if(fpassworduser && fpassworduser['statuscode'] == 403){
          this.toastr.error(fpassworduser['message'])
          return
        }
          $('#otp').modal('show')
          this.toastr.success(fpassworduser['message'])
          localStorage.setItem('pydeyaUser',JSON.stringify(fpassworduser['response']))
          // $('#otp').modal('hide')
       // debugger
      },
      error => {
        console.log(error);
        //debugger
        this.toastr.error(error['message'])
      }
    )
  }
  confirm(){
    $('#creater-profile-payment').modal('hide')
    this.toastr.success('Profile created successfully.')

  }

  skip(){
    $('#creater-profile-payment').modal('hide')
    this.toastr.success('Profile created successfully.')
  }
  getCatData(){
    console.log("calling api")
    this.service.get('getAllCatSubCatData', 0).subscribe(res => {
      this.catData = res['response']
    })
  }
  groceryCatData
  getgroceryCatdata(){
    console.log("calling api")
    this.service.get('getGroceryCatData', 1).subscribe(res => {
      this.groceryCatData = res['response']
      console.log(this.groceryCatData)
    })
  }
  navUrl(id) {
    console.log(id)
  }
  logout(){
    console.log("logout calling")
    localStorage.removeItem('pydeyaUser');
    localStorage.removeItem('token');
    localStorage.removeItem('Cart');
    this.service.navigatePage('/')
    this.isLoggedIn = 0
  }
}

