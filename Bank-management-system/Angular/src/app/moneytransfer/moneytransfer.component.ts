import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.css']
})
export class MoneytransferComponent implements OnInit {

  constructor(private myservice: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }
  toaccount: any;
  fromaccount: any;
  transfer: any;
  password: any;

  getData: any;

  transferamount() {
    this.myservice.moneytransfer(this.fromaccount, this.toaccount, this.transfer, this.password).subscribe((x) => {
      this.getData = x;

      if (this.getData.msg != null) {
        alert(this.getData.msg);
      } else {
        alert("Successfully Transfer");
        this.router.navigateByUrl("userpage");
      }

    });

  }
}