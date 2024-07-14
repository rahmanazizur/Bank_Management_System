import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-showloantransaction',
  templateUrl: './showloantransaction.component.html',
  styleUrls: ['./showloantransaction.component.css']
})
export class ShowloantransactionComponent implements OnInit {

  getAllData: any;
  constructor(private myservice: AdminLoginService) {
    this.myservice.showallloantransaction().subscribe((x) => { this.getAllData = x });
  }

  ngOnInit(): void {
  }

}