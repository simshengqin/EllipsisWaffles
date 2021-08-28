import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.scss']
})
export class UserCheckoutComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.createTransaction();
  }

  async createTransaction(): Promise<void> {
    const newTransaction = {
      user_id: "1",
      company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
      product_id: "3b1bcab3-1d8b-427f-a428-f17c784792f3",
      quantity: 2,
      review: "Tasty!!",
      rating: 5,
    };
    const newTransactionDB = await this.api.CreateTransaction(newTransaction);
    console.log(newTransactionDB);
  }

}

