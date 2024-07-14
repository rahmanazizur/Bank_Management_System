import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showloanaccounts',
  templateUrl: './showloanaccounts.component.html',
  styleUrls: ['./showloanaccounts.component.css']
})
export class ShowloanaccountsComponent implements OnInit {

  getAllData: any;
  constructor(private myservice: AdminLoginService, private router: Router) {
    this.myservice.showloanaccount().subscribe((x) => { this.getAllData = x });
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl("adminPage");
  }

  delete(accnumber: any) {
    if (confirm("Do you want to delete this loan account " + accnumber + " ?")) {
      console.log(
        this.myservice.deleteloanaccount(accnumber).subscribe(() => {
          this.myservice.showloanaccount().subscribe((x) => {
            this.getAllData = x;
            alert("Delete successful");
            this.router.navigateByUrl("showloanaccounts");
          });
        })

      )
    }
  }

}