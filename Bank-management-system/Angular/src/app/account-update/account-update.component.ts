import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';
import { Createaccount } from '../models/createaccount';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

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

  //  ------------------------------ update account/ variable golo oi upor ya---------------------------------

  update() {
    this.getData = new Createaccount(this.a_number, this.password, this.nid, this.acctype, this.name, this.gender, this.mobile, this.email, this.address, this.date, this.mar_status, this.occupation, this.balance);
    this.myservice.update(this.getData).subscribe(() => { });
    alert("Successfully Updated");
    this.router.navigateByUrl("showAllUser");
  }

}
