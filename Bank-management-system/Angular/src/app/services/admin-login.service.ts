import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';
import { Applyaccount } from '../models/applyaccount';
import { Createaccount } from '../models/createaccount';
import { Applyforloan } from '../models/applyforloan';
import { Loanapproval } from '../models/loanapproval';
import { Transaction } from '../models/transaction';
import { Loantransaction } from '../models/loantransaction';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

  url: any;

  // ------------------- admin login ---------------------------

  login(id: any, password: any): Observable<Admin> {
    this.url = "http://localhost:8080/adminlogin/";
    return this.http.get<Admin>(this.url + id + "/" + password);
  }

  // ----------------------- show all admin info ----------------------- 

  showAdmin(): Observable<Admin> {
    this.url = "http://localhost:8080/show_admin";
    return this.http.get<Admin>(this.url);
  }

   // ----------------------- show all customer transaction ----------------------- 

   getalltransaction(): Observable<Transaction> {
    this.url = "http://localhost:8080/getalltransaction";
    return this.http.get<Transaction>(this.url);
  }

  // -------------------------- search and get admin account -------------------------------

  search(s: any): Observable<Admin> {
    this.url = "http://localhost:8080/adminSearch/";
    return this.http.get<Admin>(this.url + s);
  }

   // -------------------------- search and get bank statement data -------------------------------

   searchstatement(a_number: any, predate:any, curdate:any): Observable<Transaction> {
    this.url = "http://localhost:8080/bankstatement/";
    return this.http.get<Transaction>(this.url + a_number+"/"+predate+"/"+curdate);
  }

   // -------------------------- search and get loan statement -------------------------------

   searchloanstatement(accnumber: any): Observable<Loantransaction> {
    this.url = "http://localhost:8080/getloanstatement/";
    return this.http.get<Loantransaction>(this.url + accnumber);
  }

  // ------------------- update admin account -------------------------

  update(s: Admin): Observable<Admin> {
    this.url = "http://localhost:8080/updateAdminAccount";
    return this.http.put<Admin>(this.url, s);
  }

   // ------------------- delete loan account --------------------------

   deleteloanaccount(accnumber:any): Observable<Loanapproval> {
    this.url = "http://localhost:8080/deleteloanAccount/";
    return this.http.delete<Loanapproval>(this.url+accnumber);
  }

  // ------------------- delete admin account/ onna page ya niya -------------

  delete(s: Admin): Observable<Admin> {
    this.url = "http://localhost:8080/deleteAdminAccount";
    return this.http.post<Admin>(this.url, s);
  }

   // ------------------- delete admin account same page ya ------------------

   deleteAdminById(id: any): Observable<Admin> {
    this.url = "http://localhost:8080/deleteAdminAccbyId/";
    return this.http.delete<Admin>(this.url+ id);
  }

   // ------------- delete apply for new account by nid -------------------

   deleteaccountapply(nid: any): Observable<Applyaccount> {
    this.url = "http://localhost:8080/deleteaccountapply/";
    return this.http.delete<Applyaccount>(this.url+ nid);
  }

  // ----------------------- show apply for new account -----------------------

  showapplicationforaccount(): Observable<Applyaccount> {
    this.url = "http://localhost:8080/showapplyforaccount";
    return this.http.get<Applyaccount>(this.url);
  }

  // -------------------- get user by Nid -------------------------------

  getAccountByNid(x: any): Observable<Applyaccount> {
    this.url = "http://localhost:8080/nid/";
    return this.http.get<Applyaccount>(this.url + x);
  }

  // ----------------------- show apply for Loan-----------------------

  showapplyforloan(): Observable<Applyforloan> {
    this.url = "http://localhost:8080/showapplyforloan";
    return this.http.get<Applyforloan>(this.url);
  }

   // ----------------------- show Loan accounts---------------------- 

   showloanaccount(): Observable<Loanapproval> {
    this.url = "http://localhost:8080/showloanaccount";
    return this.http.get<Loanapproval>(this.url);
  }

    // ----------------------- show all customer loan transaction---------------------- 

    showallloantransaction(): Observable<Loantransaction> {
      this.url = "http://localhost:8080/showallloantransaction";
      return this.http.get<Loantransaction>(this.url);
    }

  // -------------------- get apply for loan by Nid -------------------------------

  getloanBynid(x: any): Observable<Applyforloan> {
    this.url = "http://localhost:8080/loannid/";
    return this.http.get<Applyforloan>(this.url + x);
  }

   // ------------------------ delete apply for loan by Nid -----------------------------

   deleteloanapply(s: any): Observable<Applyforloan> {
    this.url = "http://localhost:8080/deleteloanapply/";
    return this.http.delete<Applyforloan>(this.url + s);
  }

  // ---------------------- add user account create account table ya -------------------

  addAccount(s: Createaccount): Observable<Createaccount> {
    this.url = "http://localhost:8080/Adduseraccount";
    return this.http.put<Createaccount>(this.url, s);
  }

   // ---------------------- add loan account loan approval table ya -------------------

   addforloanaccount(s: Loanapproval): Observable<Loanapproval> {
    this.url = "http://localhost:8080/addloanaccount";
    return this.http.post<Loanapproval>(this.url, s);
  }

  // -------------------pay installment by admin---------------------------

  payinstallment(accnumber: any, amount: any): Observable<Loanapproval> {
    this.url = "http://localhost:8080/payinstallment/";
    return this.http.get<Loanapproval>(this.url + accnumber + "/" + amount);
  }

  // ------------------- Reject user application by admin --------------------------

  rejectAccount(s: Applyaccount): Observable<Applyaccount> {
    this.url = "http://localhost:8080/rejectApplication";
    return this.http.post<Applyaccount>(this.url, s);
  }

  // ------------------- Deposit by admin---------------------------

  createdeposit(a_number: any, deposit: any): Observable<Createaccount> {
    this.url = "http://localhost:8080/createdeposit/";
    return this.http.get<Createaccount>(this.url + a_number + "/" + deposit);
  }

  // ------------------- Withdraw by admin---------------------------

  withdraw(a_number: any, withdraw: any, password: any): Observable<Createaccount> {
    this.url = "http://localhost:8080/createwithdraw/";
    return this.http.get<Createaccount>(this.url + a_number + "/" + withdraw + "/" + password);
  }

  // ------------------- money transfer by admin---------------------------

  moneytransfer(fromaccount: any, toaccount: any, transfer: any, password: any): Observable<Createaccount> {
    this.url = "http://localhost:8080/balancetransfer/";
    return this.http.get<Createaccount>(this.url + fromaccount + "/" + toaccount + "/" + transfer + "/" + password);
  }

}