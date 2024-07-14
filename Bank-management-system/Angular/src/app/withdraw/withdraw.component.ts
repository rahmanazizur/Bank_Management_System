import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private myservice: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  a_number: any;
  withdraw: any;
  password: any;

  getData: any;

  changeBalance() {
    this.myservice.withdraw(this.a_number, this.withdraw, this.password).subscribe((x) => {
      this.getData = x;


      // this.a_number = "";
      // this.withdraw = "";
      // this.password = "";

      if (this.getData.msg != null) {
        alert(this.getData.msg);
      } else {

        alert("successfully withdraw");
        this.router.navigateByUrl("userpage");
      }

    });

  }

}