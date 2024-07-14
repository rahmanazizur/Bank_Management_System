export class Transaction {
  tid: any;
  ttype: any;
  a_number: any;
  a_type: any;
  prebalance: any;
  tamount: any;
  curbalance: any;
  date: any;
  time: any;
  toacc_number: any;

  constructor(tid: any, ttype: any, a_number: any, a_type: any, prebalance: any, tamount: any, curbalance: any, date: any, time: any, toacc_number: any) {
    this.tid = tid;
    this.ttype = ttype;
    this.a_number = a_number;
    this.a_type = a_type;
    this.prebalance = prebalance;
    this.tamount = tamount;
    this.curbalance = curbalance;
    this.date = date;
    this.time = time;
    this.toacc_number = toacc_number;

  }
}
