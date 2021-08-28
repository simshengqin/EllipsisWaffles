import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-company-expansion-analysis',
  templateUrl: './company-expansion-analysis.component.html',
  styleUrls: ['./company-expansion-analysis.component.scss']
})
export class CompanyExpansionAnalysisComponent implements OnInit {
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

