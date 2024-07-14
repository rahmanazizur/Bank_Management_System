import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchstatement',
  templateUrl: './searchstatement.component.html',
  styleUrls: ['./searchstatement.component.css']
})
export class SearchstatementComponent implements OnInit {

  accnumber:any;
  constructor(private myservice: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  getData:any;
  searchloanstatement() {
    this.myservice.searchloanstatement(this.accnumber).subscribe((x) => {
      this.getData = x
      this.router.navigateByUrl("loanstatement", { state: { response: this.getData } });
    });
  }

}