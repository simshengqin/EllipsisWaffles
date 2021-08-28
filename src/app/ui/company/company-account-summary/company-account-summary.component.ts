import { Component, OnInit } from '@angular/core';
import {APIService, Company, FinanceAccount, Loan} from "../../../API.service";

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
  ) { }

  ngOnInit(): void {
    this.loadFinanceAccounts();
    this.loadLoans();
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

}

