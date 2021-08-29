import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction, UpdateTransactionInput} from "../../../API.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-company-view-transactions',
  templateUrl: './company-view-transactions.component.html',
  styleUrls: ['./company-view-transactions.component.scss']
})
export class CompanyViewTransactionsComponent implements OnInit {

  time!:string;
  transactions: Transaction[] = [];
  completedCount = 0;
  rejectedCount = 0;
  constructor(
    private api: APIService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    //this.createTransaction();
    this.loadTransactions();

    var today = new Date();
    this.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  }
  async createTransaction(): Promise<void> {
    /*
    const newTransaction = {
      user_id: "1",
      company_name: "Song Kee Fish Ball Noodle",
      company_address: "Blk 79 Circuit Road",
      product_name: "Fishball Noodle",
      price: 3.56,
      status: "completed"
    }; */
    const newTransaction = {
      user_id: "1",
      company_name: "Song Kee Fish Ball Noodle",
      company_address: "Blk 79 Circuit Road",
      product_name: "Liver & Fishball Noodles",
      price: 5.50,
      status: "completed"
    };
    const newTransactionDB = await this.api.CreateTransaction(newTransaction);
    console.log(newTransactionDB);
  }

  loadTransactions(): void {
    this.api.ListTransactions().then(event => {
      this.transactions = event.items as Array<Transaction>;
      console.log(this.transactions);
      for (let transaction of this.transactions) {
        if (transaction.status == "completed") {
          this.completedCount++;
        }
        if (transaction.status == "rejected") {
          this.rejectedCount++;
        }
      }
    });

  }

  async markAsReady(transaction: Transaction): Promise<void> {
    const updateTransactionInput: UpdateTransactionInput = {
      id: transaction.id,
      status: 'prepared'
    };
    await this.api.UpdateTransaction(updateTransactionInput);
    this.loadTransactions();
    this.toastrService.success('Successfully confirmed order as ready!');
  }
  async rejectOrder(transaction: Transaction): Promise<void> {
    const updateTransactionInput: UpdateTransactionInput = {
      id: transaction.id,
      status: 'rejected'
    };
    await this.api.UpdateTransaction(updateTransactionInput);
    this.loadTransactions();
    this.toastrService.success('Successfully rejected order!');
  }
}

