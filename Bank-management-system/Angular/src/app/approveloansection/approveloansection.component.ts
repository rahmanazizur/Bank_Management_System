import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/admin-login.service';
import { Loanapproval } from '../models/loanapproval';

@Component({
  selector: 'app-approveloansection',
  templateUrl: './approveloansection.component.html',
  styleUrls: ['./approveloansection.component.css']
})
export class ApproveloansectionComponent implements OnInit {


  accnumber: any;
  password: any;
  nid: any;
  loantype: any;
  req_amount: any;
  duration: any;
  cash: any;
  interest_rate: any;
  total_amount: any;
  installment: any;
  paid_installment: any;
  monthlypaid: any;
  paid_amount: any;
  due: any;
  name: any;
  gender: any;
  mobile: any;
  email: any;
  address: any;
  date: any;
  mar_status: any;
  occupation: any;

  getData: any;
  setAccount: any;

  constructor(private router: Router, private myservice: AdminLoginService) {
    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];

    this.nid = this.getData.nid;
    this.loantype = this.getData.loantype;
    this.name = this.getData.name;
    this.gender = this.getData.gender;
    this.mobile = this.getData.mobile;
    this.email = this.getData.email;
    this.address = this.getData.address;
    this.date = this.getData.date;
    this.mar_status = this.getData.mar_status;
    this.occupation = this.getData.occupation;
    this.req_amount = this.getData.amount;
    this.duration = this.getData.duration;

  }

  ngOnInit(): void {
  }

  create() {

    this.setAccount = new Loanapproval(this.accnumber, this.password, this.nid, this.loantype,
      this.req_amount, this.duration, this.cash, this.interest_rate, this.total_amount,
      this.installment, this.paid_installment, this.monthlypaid, this.paid_amount, this.due,
      this.name, this.gender, this.mobile, this.email, this.address,
      this.date, this.mar_status, this.occupation);

    this.myservice.addforloanaccount(this.setAccount).subscribe(() => { 
      
    // this.router.navigateByUrl("showapplyforloan");
    });
    
  }

  delete() {
    this.myservice.deleteloanapply(this.nid).subscribe(() => {
      alert("Successfully added");
      this.router.navigateByUrl("showapplyforloan");
    });
  }

}