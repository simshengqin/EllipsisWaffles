import { Component, OnInit } from '@angular/core';
import {APIService, Company, FinanceAccount, Loan} from "../../../API.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-account-summary',
  templateUrl: './company-account-summary.component.html',
  styleUrls: ['./company-account-summary.component.scss']
})
export class CompanyAccountSummaryComponent implements OnInit {
  financeAccounts: FinanceAccount[] = [];
  loans: Loan[] = [];
  constructor(
    private api: APIService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.createFinanceAccount();
    this.loadFinanceAccounts();
    this.loadLoans();
  }
  async createFinanceAccount(): Promise<void> {
    const newFinanceAccount = {
      name: "Platinum Black",
      account_number: "00-0000-000-0",
      amount: "$10000"
    };
    const newFinanceAccountDB = await this.api.CreateFinanceAccount(newFinanceAccount);
    console.log("Created new finance account");
    console.log(newFinanceAccountDB);
  }
  loadFinanceAccounts(): void {
    this.api.ListFinanceAccounts().then(event => {
      this.financeAccounts = event.items as Array<FinanceAccount>;
      console.log(this.financeAccounts);
    });
  }
  loadLoans(): void {
    this.api.ListLoans().then(event => {
      this.loans = event.items as Array<Loan>;
      console.log(this.loans);
    });
  }
  onLoanCLick(loan: Loan) {
    // this.router.navigate(['/company/view-loan?id='+ loan.id] );
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['company/view-loan'], {queryParams: {id: loan.id}}));
  }
}

