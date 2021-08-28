import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-company-view-transactions',
  templateUrl: './company-view-transactions.component.html',
  styleUrls: ['./company-view-transactions.component.scss']
})
export class CompanyViewTransactionsComponent implements OnInit {
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

