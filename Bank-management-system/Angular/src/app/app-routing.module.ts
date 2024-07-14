import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShowAllUserComponent } from './show-all-user/show-all-user.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ErrorComponent } from './error/error.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SearchComponent } from './search/search.component';
import { UserAccountInfoComponent } from './user-account-info/user-account-info.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { UserapplyaccountComponent } from './userapplyaccount/userapplyaccount.component';
import { ShowapplyforaccountComponent } from './showapplyforaccount/showapplyforaccount.component';
import { AccountdeleteComponent } from './accountdelete/accountdelete.component';
import { AdminaccountupdateComponent } from './adminaccountupdate/adminaccountupdate.component';
import { AdminaccountdeleteComponent } from './adminaccountdelete/adminaccountdelete.component';
import { AdmincreateaccountComponent } from './admincreateaccount/admincreateaccount.component';
import { RejectaccountComponent } from './rejectaccount/rejectaccount.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { ShowcustomerbalanceComponent } from './showcustomerbalance/showcustomerbalance.component';
import { ShowuserbalanceComponent } from './showuserbalance/showuserbalance.component';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import { ShowapplyforloanComponent } from './showapplyforloan/showapplyforloan.component';
import { ApproveloansectionComponent } from './approveloansection/approveloansection.component';
import { ShowloanaccountsComponent } from './showloanaccounts/showloanaccounts.component';
import { PayinstallmentComponent } from './payinstallment/payinstallment.component';
import { BankstatementComponent } from './bankstatement/bankstatement.component';
import { ShowbankstatementComponent } from './showbankstatement/showbankstatement.component';
import { SearchstatementComponent } from './searchstatement/searchstatement.component';
import { LoanstatementComponent } from './loanstatement/loanstatement.component';
import { ShowtransactionComponent } from './showtransaction/showtransaction.component';
import { ShowloantransactionComponent } from './showloantransaction/showloantransaction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'showAllUser', component: ShowAllUserComponent },
  { path: 'accountUpdate', component: AccountUpdateComponent },
  { path: 'adminAccount', component: AdminAccountComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'adminPage', component: AdminPageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'useraccountinfo', component: UserAccountInfoComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'userheader', component: UserheaderComponent },
  { path: 'usersidebar', component: UsersidebarComponent },
  { path: 'userapplyaccount', component: UserapplyaccountComponent },
  { path: 'showapplyforaccount', component: ShowapplyforaccountComponent },
  { path: 'accountdelete', component: AccountdeleteComponent },
  { path: 'adminaccountupdate', component: AdminaccountupdateComponent },
  { path: 'adminaccountdelete', component: AdminaccountdeleteComponent },
  { path: 'admincreateaccount', component: AdmincreateaccountComponent },
  { path: 'rejectaccount', component: RejectaccountComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'deposit/:a_number/:deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'withdraw/:a_number/:withdraw/:password', component: WithdrawComponent },
  { path: 'moneytransfer', component: MoneytransferComponent },
  { path: 'moneytransfer/:fromaccount/:toaccount/:transfer/:password', component: MoneytransferComponent },
  { path: 'checkbalance', component: CheckbalanceComponent },
  { path: 'showcustomerbalance', component: ShowcustomerbalanceComponent },
  { path: 'showuserbalance', component: ShowuserbalanceComponent },
  { path: 'applyforloan', component: ApplyforloanComponent },
  { path: 'showapplyforloan', component: ShowapplyforloanComponent },
  { path: 'approveloansection', component: ApproveloansectionComponent },
  { path: 'showloanaccounts', component: ShowloanaccountsComponent },
  { path: 'payinstallment', component: PayinstallmentComponent },
  { path: 'bankstatement', component: BankstatementComponent },
  { path: 'showbankstatement', component: ShowbankstatementComponent },
  { path: 'searchstatement', component: SearchstatementComponent },
  { path: 'loanstatement', component: LoanstatementComponent },
  { path: 'showtransaction', component: ShowtransactionComponent },
  { path: 'showloantransaction', component: ShowloantransactionComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
