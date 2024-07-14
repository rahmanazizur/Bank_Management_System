import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showapplyforaccount',
  templateUrl: './showapplyforaccount.component.html',
  styleUrls: ['./showapplyforaccount.component.css']
})
export class ShowapplyforaccountComponent implements OnInit {

  getAllData: any;
  constructor(private myservice: AdminLoginService, private router: Router) {
    this.myservice.showapplicationforaccount().subscribe((x) => { this.getAllData = x });
  }
  ngOnInit(): void {
  }
  // ------------------------- get user by nid -------------------------------

  nid: any;
  getData: any;
  search(p: any) {
    this.nid = p;
    this.myservice.getAccountByNid(this.nid).subscribe((x) => {
      this.getData = x
      this.router.navigateByUrl("admincreateaccount", { state: { response: this.getData } });
    });
  }

  // -------------------- reject application for account ai same page ya ( just refresh dita hoba) ---------------------------------------

  // reject(p: any) {
  //   this.nid = p;
  //   this.myservice.getAccountByNid(this.nid).subscribe((x) => {
  //     this.getData = x
  //     this.router.navigateByUrl("rejectaccount", { state: { response: this.getData }});
  //   });
  // }



  reject(nid: any) {
    if (confirm("Do you want to reject this application  ?? ")) {
      console.log(
        this.myservice.deleteaccountapply(nid).subscribe(() => {
          this.myservice.showapplicationforaccount().subscribe((x) => {
            this.getAllData = x;
            this.router.navigateByUrl("showapplyforaccount");
          });
        })

      )
    }
  }

  back() {
    this.router.navigateByUrl("adminPage");
  }

}