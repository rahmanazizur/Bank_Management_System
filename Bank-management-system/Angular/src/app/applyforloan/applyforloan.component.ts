import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';
import { Applyforloan } from '../models/applyforloan';

@Component({
  selector: 'app-applyforloan',
  templateUrl: './applyforloan.component.html',
  styleUrls: ['./applyforloan.component.css']
})
export class ApplyforloanComponent implements OnInit {

  constructor(private myservice: UserRegistrationService, private router: Router) { }

  nid: any;
  loantype: any;
  name: any;
  gender: any;
  mobile: any;
  email: any;
  address: any;
  date: any;
  mar_status: any;
  occupation: any;
  amount: any;
  duration: any;

  alldata: any;

  ngOnInit(): void {
  }

  insert() {
    this.alldata = new Applyforloan(this.nid, this.loantype, this.name, this.gender,
      this.mobile, this.email, this.address, this.date, this.mar_status, this.occupation, this.amount, this.duration);
    this.myservice.applyforloan(this.alldata).subscribe(() => {
      alert("Successful");
      this.router.navigateByUrl("userpage");
    });

  }
}