import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showbankstatement',
  templateUrl: './showbankstatement.component.html',
  styleUrls: ['./showbankstatement.component.css']
})
export class ShowbankstatementComponent implements OnInit {

  allData:any;
  constructor( private router: Router) { 
    this.allData=this.router.getCurrentNavigation()?.extras.state?.["response"];
  }

  ngOnInit(): void {
  }

}