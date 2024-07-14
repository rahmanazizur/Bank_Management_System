export class Createaccount {
  a_number: any;
  password: any;
  nid: any;
  acctype: any;
  name: any;
  gender: any;
  mobile: any;
  email: any;
  address: any;
  date: any;
  mar_status: any;
  occupation: any;
  balance: any;

  msg: any;  

  constructor(a_number: any, password: any, nid: any, acctype: any, name: any, gender: any, mobile: any, email: any, address: any, date: any, mar_status: any, occupation: any, balance: any) {
    this.a_number = a_number;
    this.password = password;
    this.nid = nid;
    this.acctype = acctype;
    this.name = name;
    this.gender = gender;
    this.mobile = mobile;
    this.email = email;
    this.address = address;
    this.date = date;
    this.mar_status = mar_status;
    this.occupation = occupation;
    this.balance = balance;
  }

}