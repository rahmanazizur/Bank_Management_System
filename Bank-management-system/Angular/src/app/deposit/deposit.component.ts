import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Createaccount } from '../models/createaccount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private myservice: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }
  a_number: any;
  deposit: any;

  data:any;
  addBalance() {
    this.myservice.createdeposit(this.a_number, this.deposit).subscribe((x) => {
      this.data=x;
      alert("Deposit Successful");
      this.router.navigateByUrl("adminPage");
     });
    
  }

}