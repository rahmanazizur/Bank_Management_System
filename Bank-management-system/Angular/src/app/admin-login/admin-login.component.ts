import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private myservice: AdminLoginService, private router: Router) { }

  id: any;
  password: any;

  loginAdmin: any;

  ngOnInit(): void {
  }

  login() {
    this.myservice.login(this.id, this.password).subscribe((x) => {
      this.loginAdmin = x;

      if ((this.loginAdmin != null)) {
        this.router.navigateByUrl("adminPage");
        alert("Login Successful");
      } else {
        this.router.navigateByUrl("error");
      }
    });

  }

}