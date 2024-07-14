import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../services/user-registration.service';
import { Createaccount } from '../models/createaccount';

@Component({
  selector: 'app-accountdelete',
  templateUrl: './accountdelete.component.html',
  styleUrls: ['./accountdelete.component.css']
})
export class AccountdeleteComponent implements OnInit {

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


  getData: any;
  constructor(private router: Router, private myservice: UserRegistrationService) {

    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];

    this.a_number = this.getData.a_number;
    this.password = this.getData.password;
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
    this.balance = this.getData.balance;

  }

  ngOnInit(): void {
  }

  //  ------------------------------ update account   variable golo oi upor ya---------------------------------

  delete() {
    this.getData = new Createaccount(this.a_number, this.password, this.nid, this.acctype, this.name, this.gender, this.mobile, this.email, this.address, this.date, this.mar_status, this.occupation, this.balance);
    this.myservice.delete(this.getData).subscribe(() => { });
    alert("Successfully deleted");
    this.router.navigateByUrl("showAllUser");
  }
}