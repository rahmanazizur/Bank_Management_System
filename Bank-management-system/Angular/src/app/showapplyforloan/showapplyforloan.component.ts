import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showapplyforloan',
  templateUrl: './showapplyforloan.component.html',
  styleUrls: ['./showapplyforloan.component.css']
})
export class ShowapplyforloanComponent implements OnInit {

  getAllData: any;

  constructor(private myservice: AdminLoginService, private router: Router) {
    this.myservice.showapplyforloan().subscribe((x) => { this.getAllData = x });
  }

  ngOnInit(): void {
  }

  // ------------------------- get user by nid -------------------------------


  getData: any;
  search(p: any) {
    this.myservice.getloanBynid(p).subscribe((x) => {
      this.getData = x;
      this.router.navigateByUrl("approveloansection", { state: { response: this.getData } });
    });

  }



  // // -------------------- reject application for account ai same page ya ( just refresh dita hoba) -----------
  // reject(p: any) {
  //   this.nid = p;
  //   this.myservice.getAccountByNid(this.nid).subscribe((x) => {
  //     this.getData = x
  //     this.router.navigateByUrl("rejectaccount", { state: { response: this.getData }});=>>>>(ai page refresh deya)
  //   });
  // } 




  // ------------------------------------- Reject ----------------------------------------
  delete(p: any) {
    if (confirm("Do you want to reject this application ??")) {
      console.log(
        this.myservice.deleteloanapply(p).subscribe(() => {
          alert("Successfully reject");
          this.myservice.showapplyforloan().subscribe((x) => {
            this.getAllData = x;
            this.router.navigateByUrl("showapplyforloan", { state: { response: this.getAllData } });
          });
        })

      )
    } else {
      // --------alert("Not delete")----------;
    }
  }

  // ----------------------------------------------------------------------------------------
  back() {
    this.router.navigateByUrl("adminPage");
  }

}