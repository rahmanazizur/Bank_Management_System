import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showuserbalance',
  templateUrl: './showuserbalance.component.html',
  styleUrls: ['./showuserbalance.component.css']
})
export class ShowuserbalanceComponent implements OnInit {


  getData:any;
  
  constructor(private router:Router) {
    this.getData = this.router.getCurrentNavigation()?.extras.state?.["response"];
   }

  ngOnInit(): void {
  }

}
