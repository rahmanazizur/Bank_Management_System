import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applyaccount } from '../models/applyaccount';
import { Createaccount } from '../models/createaccount';
import { Applyforloan } from '../models/applyforloan';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  url: any;

  // ------------------ user application for createAccount ---------------
  createAccount(s: Applyaccount): Observable<Applyaccount> {
    this.url = "http://localhost:8080/createaccount";
    return this.http.post<Applyaccount>(this.url, s);
  }

  // ------------------ Apply for loan ---------------

  applyforloan(s: Applyforloan): Observable<Applyforloan> {
    this.url = "http://localhost:8080/applyforloan";
    return this.http.post<Applyforloan>(this.url, s);
  }

  // ------------------ show all user data -------------------

  show(): Observable<Createaccount> {
    this.url = "http://localhost:8080/showallCustomerData";
    return this.http.get<Createaccount>(this.url);
  }

  // -------------------------- search a Customer account -------------------------------

  search(x: any): Observable<Createaccount> {
    this.url = "http://localhost:8080/getaccountdetails/";
    return this.http.get<Createaccount>(this.url + x);
  }

  // ------------------------ update user data --------------------------------
  update(s: Createaccount): Observable<Createaccount> {
    this.url = "http://localhost:8080/update";
    return this.http.put<Createaccount>(this.url, s);
  }

  // ------------------------ delete user data onna page ya niya delete kora  ---------------------
  delete(s: Createaccount): Observable<Createaccount> {
    this.url = "http://localhost:8080/delete";
    return this.http.post<Createaccount>(this.url, s);
  }
  // --------------- Check Balance by User --------------------------------------
  searchBYUser(a_number: any, password: any): Observable<Createaccount> {
    this.url = "http://localhost:8080/checkbalancebyuser/";
    return this.http.get<Createaccount>(this.url + a_number + "/" + password);
  }

  // ------------------------ delete on click way ---------------------------
  deleteOnclick(s: any): Observable<Createaccount> {
    this.url = "http://localhost:8080/deleteOnclick/";
    return this.http.delete<Createaccount>(this.url + s);
  }

}
