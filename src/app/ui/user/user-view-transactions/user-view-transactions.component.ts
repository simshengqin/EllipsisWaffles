import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction, UpdateTransactionInput} from "../../../API.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-view-transactions',
  templateUrl: './user-view-transactions.component.html',
  styleUrls: ['./user-view-transactions.component.scss']
})
export class UserViewTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(
    private api: APIService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.api.ListTransactions().then(event => {
      this.transactions = event.items as Array<Transaction>;
      console.log(this.transactions);
      this.transactions = this.transactions.sort((obj1, obj2) => {
        if (obj1.createdAt < obj2.createdAt) {
          return 1;
        }

        if (obj1.createdAt > obj2.createdAt) {
          return -1;
        }

        return 0;
      });
    });
  }
  async completeTransaction(transaction: Transaction): Promise<void> {
    const updateTransactionInput: UpdateTransactionInput = {
      id: transaction.id,
      status: 'completed'
    };
    await this.api.UpdateTransaction(updateTransactionInput);
    this.loadTransactions();
    this.toastrService.success('Successfully collected order!');
  }

}

