import { Component, OnInit } from '@angular/core';
import {APIService, Company, Loan, ModelLoanFilterInput} from "../../../API.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-view-loan',
  templateUrl: './company-view-loan.component.html',
  styleUrls: ['./company-view-loan.component.scss']
})
export class CompanyViewLoanComponent implements OnInit {
  loan: Loan = null;
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
        this.chartDatasets[0].data = [this.loan.amount_unpaid, this.loan.loan_amount - this.loan.amount_unpaid];
      });
    });

  }

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [], label: 'Loan Data' }
  ];

  public chartLabels: Array<any> = ['Unpaid', 'Paid'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}

