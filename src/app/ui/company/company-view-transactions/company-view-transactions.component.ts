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
    // this.createTransaction();
    this.loadTransactions();
  }
  async createTransaction(): Promise<void> {
    const newTransaction = {
      user_id: "1",
      company_name: "Song Kee Fish Ball Noodle",
      company_address: "Blk 79 Circuit Road",
      product_name: "Fishball Noodle",
      price: 3.56,
      status: "completed"
    };
    const newTransactionDB = await this.api.CreateTransaction(newTransaction);
    console.log(newTransactionDB);
  }

  loadTransactions(): void {
    this.api.ListTransactions().then(event => {
      this.transactions = event.items as Array<Transaction>;
      console.log(this.transactions);
    });
  }

}

