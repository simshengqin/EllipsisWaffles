import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-user-view-transactions',
  templateUrl: './user-view-transactions.component.html',
  styleUrls: ['./user-view-transactions.component.scss']
})
export class UserViewTransactionsComponent implements OnInit {
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

