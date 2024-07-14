import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private myservice:UserRegistrationService, private router:Router) { }

  a_number:any;
  name:any;
  gender:any;
  email:any;
  password:any;
  phone:any;
  balance:any;
  
  alldata:any;

  ngOnInit(): void {
  }

  insert() {
    this.alldata = new User(this.a_number, this.name, this.gender, this.email, this.password, this.phone, this.balance);
    this.myservice.insert(this.alldata).subscribe(() => { });
    alert("Successfully submitted");
    this.router.navigateByUrl("home");
  }
}
