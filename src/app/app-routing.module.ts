import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserExploreComponent} from "./ui/user/user-explore/user-explore.component";
import {UserViewCompanyComponent} from "./ui/user/user-view-company/user-view-company.component";
import {UserCheckoutComponent} from "./ui/user/user-checkout/user-checkout.component";
import {UserViewTransactionsComponent} from "./ui/user/user-view-transactions/user-view-transactions.component";
import {CompanyViewTransactionsComponent} from "./ui/company/company-view-transactions/company-view-transactions.component";
import {CompanyCreateLoanComponent} from "./ui/company/company-create-loan/company-create-loan.component";
import {CompanyCreateProductComponent} from "./ui/company/company-create-product/company-create-product.component";
import {CompanyViewLoansComponent} from "./ui/company/company-view-loans/company-view-loans.component";
import {CompanyViewLoanComponent} from "./ui/company/company-view-loan/company-view-loan.component";
import {UserMealSubscriptionComponent} from "./ui/user/user-meal-subscription/user-meal-subscription.component";
import {CompanyFinancialDashboardComponent} from "./ui/company/company-financial-dashboard/company-financial-dashboard.component";
import {CompanyExpansionAnalysisComponent} from "./ui/company/company-expansion-analysis/company-expansion-analysis.component";
import {CompanyAccountSummaryComponent} from "./ui/company/company-account-summary/company-account-summary.component";
import {CompanyCreateBusinessProposalComponent} from "./ui/company/company-create-business-proposal/company-create-business-proposal.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'user/checkout', // 'else'
      pathMatch: 'full',
      component: UserCheckoutComponent
    },
    {
      path: 'user/explore', // 'else'
      pathMatch: 'full',
      component: UserExploreComponent
    },
    {
      path: 'user/meal-subscription', // 'else'
      pathMatch: 'full',
      component: UserMealSubscriptionComponent
    },
    {
      path: 'user/view-company', // 'else'
      pathMatch: 'full',
      component: UserViewCompanyComponent
    },
    {
      path: 'user/view-transactions', // 'else'
      pathMatch: 'full',
      component: UserViewTransactionsComponent
    },
    {
      path: 'company/view-transactions', // 'else'
      pathMatch: 'full',
      component: CompanyViewTransactionsComponent
    },
    {
      path: 'company/financial-dashboard', // 'else'
      pathMatch: 'full',
      component: CompanyFinancialDashboardComponent
    },
    {
      path: 'company/expansion-analysis', // 'else'
      pathMatch: 'full',
      component: CompanyExpansionAnalysisComponent
    },
    {
      path: 'company/account-summary', // 'else'
      pathMatch: 'full',
      component: CompanyAccountSummaryComponent
    },
    {
      path: 'company/view-loans', // 'else'
      pathMatch: 'full',
      component: CompanyViewLoansComponent
    },
    {
      path: 'company/view-loan', // 'else'
      pathMatch: 'full',
      component: CompanyViewLoanComponent
    },
    {
      path: 'company/create-loan', // 'else'
      pathMatch: 'full',
      component: CompanyCreateLoanComponent
    },
    {
      path: 'company/create-business-proposal', // 'else'
      pathMatch: 'full',
      component: CompanyCreateBusinessProposalComponent
    },
    {
      path: 'company/create-product', // 'else'
      pathMatch: 'full',
      component: CompanyCreateProductComponent
    },


    {
      path: '**', // 'else'
      pathMatch: 'full',
      component: UserExploreComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
