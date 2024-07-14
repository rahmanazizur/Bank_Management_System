import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account-info',
  templateUrl: './user-account-info.component.html',
  styleUrls: ['./user-account-info.component.css']
})
export class UserAccountInfoComponent implements OnInit {

  a_number: any;
  password: any;
  nid: any;
  acctype: any;
  name: any;
  gender: any;
  mobile: any;
  email: any;
  address: any;
  date: any;
  mar_status: any;
  occupation: any;
  balance: any;


  getData:any;
  constructor(private router:Router) { 

    this.getData=this.router.getCurrentNavigation()?.extras.state?.["response"];

    this.a_number=this.getData.a_number;
    this.password=this.getData.password;
    this.nid = this.getData.nid;
    this.acctype = this.getData.acctype;
    this.name = this.getData.name;
    this.gender = this.getData.gender;
    this.mobile = this.getData.mobile;
    this.email = this.getData.email;
    this.address = this.getData.address;
    this.date = this.getData.date;
    this.mar_status = this.getData.mar_status;
    this.occupation = this.getData.occupation;
    this.balance=this.getData.balance;
  }
  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl("search");
  }

}