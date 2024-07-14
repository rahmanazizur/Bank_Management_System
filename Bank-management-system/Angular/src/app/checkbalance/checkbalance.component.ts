import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  constructor(private myservice: UserRegistrationService, private router: Router) { }

  a_number: any;
  password: any;

  getData: any;

  ngOnInit(): void {
  }

  search() {
    this.myservice.searchBYUser(this.a_number, this.password).subscribe((x) => {
      this.getData = x;
      this.router.navigateByUrl("showcustomerbalance", { state: { response: this.getData } });
    });
  }


}