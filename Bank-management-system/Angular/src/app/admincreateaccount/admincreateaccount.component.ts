import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/admin-login.service';
import { Createaccount } from '../models/createaccount';

@Component({
  selector: 'app-admincreateaccount',
  templateUrl: './admincreateaccount.component.html',
  styleUrls: ['./admincreateaccount.component.css']
})
export class AdmincreateaccountComponent implements OnInit {

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
  setAccount: any;

  constructor(private router: Router, private myservice: AdminLoginService) {
    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];

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

  }

  ngOnInit(): void {
  }

  create() {
    this.setAccount = new Createaccount(this.a_number, this.password, this.nid, this.acctype, this.name, this.gender, this.mobile, this.email, this.address, this.date, this.mar_status, this.occupation, this.balance);
    this.myservice.addAccount(this.setAccount).subscribe(() => { });
    alert("Successfully submitted");
    
  }

  remove() {
    this.myservice.deleteaccountapply(this.nid).subscribe(() => {
      this.router.navigateByUrl("showapplyforaccount");
    });
  }

}