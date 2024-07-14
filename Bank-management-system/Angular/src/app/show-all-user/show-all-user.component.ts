import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';
import { Createaccount } from '../models/createaccount';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {

  getAllData: any;
  constructor(private myservice: UserRegistrationService, private router: Router) {
    this.myservice.show().subscribe((x) => { this.getAllData = x });

  }

  ngOnInit(): void {
  }

  a_number: any;
  getData: any;

  search(p: any) {
    this.a_number = p;
    this.myservice.search(this.a_number).subscribe((x) => {
      this.getData = x
      this.router.navigateByUrl("accountUpdate", { state: { response: this.getData } });
    });

  }
  // ----------------------- onna component ya niya show korano+ delete kora -------------------


  // delete(p: any) {
  //   this.a_number = p;
  //   this.myservice.search(this.a_number).subscribe((x) => {
  //     this.getData = x
  //     this.router.navigateByUrl("accountdelete", { state: { response: this.getData } });
  //   });
  // }






  // ------------------------- click way ta delete korar process -------------------

  // data: any;
  // delete(p: any) {

  //   this.myservice.search(p).subscribe((x) => {
  //     this.getData = x;
  //     this.data = new Createaccount(this.getData.a_number, this.getData.password, this.getData.nid, this.getData.acctype, this.getData.name, this.getData.gender, this.getData.mobile, this.getData.email, this.getData.address, this.getData.date, this.getData.mar_status, this.getData.occupation, this.getData.balance);
  //     this.myservice.delete(this.data).subscribe(() => {
  //       alert("Successfully deleted");
  //      this.myservice.show().subscribe((x) => { 
  // this.getAllData = x ;
  //   this.router.navigateByUrl("showAllUser", { state: { response: this.getAllData } });  -->>>(Auto refresh er jonna)
  // });
  //     });
  //   });
  // }



  // ----------------------------------- just click, delete process ---------------------------------------------


  delete(p: any) {
    if (confirm("Do you want to delete this account -- " + p + "  ?")) {
      console.log(

        this.myservice.deleteOnclick(p).subscribe(() => {
          alert("Successfully delete");
          this.myservice.show().subscribe((x) => {
            this.getAllData = x;
            this.router.navigateByUrl("showAllUser", { state: { response: this.getAllData } });
          });
        })

      )
    } else {
      // --------alert("Not delete")----------;
    }
  }


}