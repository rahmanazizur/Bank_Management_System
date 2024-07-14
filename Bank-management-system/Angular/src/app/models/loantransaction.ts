export class Loantransaction {
  tid: any;
  ttype: any;
  accnumber: any;
  loantype: any;
  totalinstallment: any;
  payinstallment: any;
  paidamount: any;
  dueamount: any;
  date: any;

  constructor(tid: any, ttype: any, accnumber: any, loantype: any, totalinstallment: any, payinstallment: any, paidamount: any, dueamount: any, date: any) {

    this.tid = tid;
    this.ttype = ttype;
    this.accnumber = accnumber;
    this.loantype = loantype;
    this.totalinstallment = totalinstallment;
    this.payinstallment = payinstallment;
    this.paidamount = paidamount;
    this.dueamount = dueamount;
    this.date = date;

  }
}