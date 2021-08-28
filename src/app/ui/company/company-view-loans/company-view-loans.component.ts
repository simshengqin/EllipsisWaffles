import { Component, OnInit } from '@angular/core';
import {APIService, Company, Loan} from "../../../API.service";

@Component({
  selector: 'app-company-view-loans',
  templateUrl: './company-view-loans.component.html',
  styleUrls: ['./company-view-loans.component.scss']
})
export class CompanyViewLoansComponent implements OnInit {
  loans: Loan[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.api.ListLoans().then(event => {
      this.loans = event.items as Array<Loan>;
      console.log(this.loans);
    });
  }

}

