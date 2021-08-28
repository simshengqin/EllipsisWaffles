import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-company-financial-dashboard',
  templateUrl: './company-financial-dashboard.component.html',
  styleUrls: ['./company-financial-dashboard.component.scss']
})
export class CompanyFinancialDashboardComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.api.ListTransactions().then(event => {
      this.transactions = event.items as Array<Transaction>;
      console.log(this.transactions);
    });
  }

}

