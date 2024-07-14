import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  getAllData: any;

  constructor(private myservice: AdminLoginService, private router: Router) {

    this.myservice.showAdmin().subscribe((x) => { this.getAllData = x });
  }

  ngOnInit(): void {
  }

  // --------------------- search kora niya asa then update kora ----------------
  getData: any;
  search(id: any) {
    this.myservice.search(id).subscribe((x) => {
      this.getData = x
      this.router.navigateByUrl("adminaccountupdate", { state: { response: this.getData } });
    });

  }
  // ----------------------- onna component ya niya show korano+ delete kora -------------------

  // delete(id:any) {
  //   this.myservice.search(id).subscribe((x) => {
  //     this.getData = x
  //     this.router.navigateByUrl("adminaccountdelete", { state: { response: this.getData }});
  //   });

  // }

  // ----------------------------- alert er maddom ya delete kora ---------------------------------

  delete(id: any) {
    if (confirm("Do you want to delete this account id  " + id + " ??")) {
      console.log(
        this.myservice.deleteAdminById(id).subscribe(() => {
          this.myservice.showAdmin().subscribe((x) => {
            this.getAllData = x;
            alert("Successfully delete");
            this.router.navigateByUrl("adminAccount", { state: { response: this.getAllData } });
          });
        })

      )
    } else {
      // --------alert("Not delete")----------;
    }
  }

}