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
import { UserViewCompaniesComponent } from './ui/user/user-view-companies/user-view-companies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserViewCompanyComponent} from "./ui/user/user-view-company/user-view-company.component";
import {UserCheckoutComponent} from "./ui/user/user-checkout/user-checkout.component";
import {UserViewTransactionsComponent} from "./ui/user/user-view-transactions/user-view-transactions.component";
import {CompanyCreateLoanComponent} from "./ui/company/company-create-loan/company-create-loan.component";
import {CompanyCreateProductComponent} from "./ui/company/company-create-product/company-create-product.component";
import {CompanyViewLoansComponent} from "./ui/company/company-view-loans/company-view-loans.component";
import {CompanyViewTransactionsComponent} from "./ui/company/company-orders/company-view-transactions.component";
import {CompanyHomeComponent} from "./ui/company/company-home/company-home.component";
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserExploreComponent,
    UserViewCompaniesComponent,
    UserViewCompanyComponent,
    UserCheckoutComponent,
    UserViewTransactionsComponent,
    CompanyHomeComponent,
    CompanyCreateLoanComponent,
    CompanyCreateProductComponent,
    CompanyViewLoansComponent,
    CompanyViewTransactionsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AmplifyUIAngularModule,
        NgbModule,
        MDBBootstrapModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
