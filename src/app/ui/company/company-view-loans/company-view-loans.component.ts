import { Component, OnInit } from '@angular/core';
import {APIService, Company, Loan} from "../../../API.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-view-loans',
  templateUrl: './company-view-loans.component.html',
  styleUrls: ['./company-view-loans.component.scss']
})
export class CompanyViewLoansComponent implements OnInit {
  loans: Loan[] = [];
  constructor(
    private api: APIService,
    private router: Router,
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

  onLoanCLick(loan: Loan) {
    // this.router.navigate(['/company/view-loan?id='+ loan.id] );
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['company/view-loan'], {queryParams: {id: loan.id}}));
  }
}

