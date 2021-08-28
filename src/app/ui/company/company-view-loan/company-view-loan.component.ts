import { Component, OnInit } from '@angular/core';
import {APIService, Company, Loan, ModelLoanFilterInput} from "../../../API.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-view-loan',
  templateUrl: './company-view-loan.component.html',
  styleUrls: ['./company-view-loan.component.scss']
})
export class CompanyViewLoanComponent implements OnInit {
  loan: Loan;
  constructor(
    private api: APIService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans(): void {
    this.activatedRoute.queryParams.subscribe(async params => {
      const id = params.id;
      console.log("Loan id: " + id);
      const filter : ModelLoanFilterInput= {
        id: {"eq": id}
      }
      this.api.ListLoans(filter).then(event => {
        this.loan = (event.items as Array<Loan>)[0];
      });
    });

  }

}

