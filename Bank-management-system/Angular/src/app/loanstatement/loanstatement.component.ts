import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanstatement',
  templateUrl: './loanstatement.component.html',
  styleUrls: ['./loanstatement.component.css']
})
export class LoanstatementComponent implements OnInit {

  getData:any;
  constructor(private router:Router) { 
    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];
  }

  ngOnInit(): void {
  }

}