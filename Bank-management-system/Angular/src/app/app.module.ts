import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginService } from './services/admin-login.service';
import { UserRegistrationService } from './services/user-registration.service';
import { ShowAllUserComponent } from './show-all-user/show-all-user.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ErrorComponent } from './error/error.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowAllUserComponent,
    AccountUpdateComponent,
    AdminAccountComponent,
    AdminLoginComponent,
    AdminPageComponent,
    ErrorComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    SearchComponent,
    UserAccountInfoComponent,
    UserpageComponent,
    UserheaderComponent,
    UsersidebarComponent,
    UserapplyaccountComponent,
    ShowapplyforaccountComponent,
    AccountdeleteComponent,
    AdminaccountupdateComponent,
    AdminaccountdeleteComponent,
    AdmincreateaccountComponent,
    RejectaccountComponent,
    DepositComponent,
    WithdrawComponent,
    MoneytransferComponent,
    CheckbalanceComponent,
    ShowcustomerbalanceComponent,
    ShowuserbalanceComponent,
    ApplyforloanComponent,
    ShowapplyforloanComponent,
    ApproveloansectionComponent,
    ShowloanaccountsComponent,
    PayinstallmentComponent,
    BankstatementComponent,
    ShowbankstatementComponent,
    SearchstatementComponent,
    LoanstatementComponent,
    ShowtransactionComponent,
    ShowloantransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminLoginService, UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
