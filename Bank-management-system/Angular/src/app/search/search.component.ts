import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myservice: UserRegistrationService, private router: Router) { }

  a_number: any;

  getData: any;

  ngOnInit(): void {
  }

  search() {
    this.myservice.search(this.a_number).subscribe((x) => {
      this.getData = x
      this.router.navigateByUrl("useraccountinfo", { state: { response: this.getData } });
    });
  }
}
