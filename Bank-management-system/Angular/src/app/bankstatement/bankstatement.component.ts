import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankstatement',
  templateUrl: './bankstatement.component.html',
  styleUrls: ['./bankstatement.component.css']
})
export class BankstatementComponent implements OnInit {

  a_number:any;
  predate:any;
  curdate:any;

 
  constructor(private myservice : AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  allData:any;
  searchtransaction(){
    this.myservice.searchstatement(this.a_number, this.predate, this.curdate).subscribe((x) => { 
      this.allData=x;
      this.router.navigateByUrl("showbankstatement", { state: { response: this.allData } });
    });
  }

}