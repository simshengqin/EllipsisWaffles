import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MDBBootstrapModule} from "angular-bootstrap-md";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";
import { UserExploreComponent } from './ui/user/user-explore/user-explore.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import {Amplify} from "aws-amplify";
import awsconfig from '../aws-exports';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserViewCompanyComponent} from "./ui/user/user-view-company/user-view-company.component";
import {UserCheckoutComponent} from "./ui/user/user-checkout/user-checkout.component";
import {UserViewTransactionsComponent} from "./ui/user/user-view-transactions/user-view-transactions.component";
import {CompanyCreateLoanComponent} from "./ui/company/company-create-loan/company-create-loan.component";
import {CompanyCreateProductComponent} from "./ui/company/company-create-product/company-create-product.component";
import {CompanyViewLoansComponent} from "./ui/company/company-view-loans/company-view-loans.component";
import {CompanyViewTransactionsComponent} from "./ui/company/company-view-transactions/company-view-transactions.component";
import {CompanyViewLoanComponent} from "./ui/company/company-view-loan/company-view-loan.component";
import {CompanyAccountSummaryComponent} from "./ui/company/company-account-summary/company-account-summary.component";
import {CompanyCreateBusinessProposalComponent} from "./ui/company/company-create-business-proposal/company-create-business-proposal.component";
import {CompanyExpansionAnalysisComponent} from "./ui/company/company-expansion-analysis/company-expansion-analysis.component";
import {CompanyFinancialDashboardComponent} from "./ui/company/company-financial-dashboard/company-financial-dashboard.component";
import {CommonModule} from "@angular/common";
import {UserHomeComponent} from "./ui/user/user-home/user-home.component";
import {UserMealSubscriptionComponent} from "./ui/user/user-meal-subscription/user-meal-subscription.component";
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserHomeComponent,
    UserExploreComponent,
    UserViewCompanyComponent,
    UserCheckoutComponent,
    UserViewTransactionsComponent,
    UserMealSubscriptionComponent,
    CompanyAccountSummaryComponent,
    CompanyCreateBusinessProposalComponent,
    CompanyCreateLoanComponent,
    CompanyCreateProductComponent,
    CompanyExpansionAnalysisComponent,
    CompanyFinancialDashboardComponent,
    CompanyViewLoanComponent,
    CompanyViewLoansComponent,
    CompanyViewTransactionsComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        AmplifyUIAngularModule,
        NgbModule,
        MDBBootstrapModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
