import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcustomerbalance',
  templateUrl: './showcustomerbalance.component.html',
  styleUrls: ['./showcustomerbalance.component.css']
})
export class ShowcustomerbalanceComponent implements OnInit {

  data:any;
  constructor(private router: Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state?.["response"];
  }

  ngOnInit(): void {
  }

}