import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-showtransaction',
  templateUrl: './showtransaction.component.html',
  styleUrls: ['./showtransaction.component.css']
})
export class ShowtransactionComponent implements OnInit {

  
  getAllData: any;

  constructor(private myservice: AdminLoginService) {

    this.myservice.getalltransaction().subscribe((x) => { this.getAllData = x });
  }

  ngOnInit(): void {
  }

}
