import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-company-financial-dashboard',
  templateUrl: './company-financial-dashboard.component.html',
  styleUrls: ['./company-financial-dashboard.component.scss']
})
export class CompanyFinancialDashboardComponent implements OnInit {
  
  transactions: Transaction[] = [];
  // Chart and inputs for Revenue to Cost
  public chartType_revenue: string = 'line';
  public chartDatasets_revenue: Array<any> = [
    { data: [20000, 24000, 22500, 23000, 19600, 17000, 16000,0,0,0,0,0], label: 'Sales by Month' },
    { data: [7000, 7200, 7150, 7200, 7010, 7000, 7010,0,0,0,0,0], label: 'Cost by Month' }
  ];
  public chartLabels_revenue: Array<any> = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  public chartColors_revenue: Array<any> = [
    {
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 0.2)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
    }
  ];
  public chartOptions_revenue: any = {
    responsive: true
  };

  elements: any = [
    {id: "Current Month:", sales: "$16000", cost: '$7010', profit: '$8990'},
    {id: "Previous Month:", sales: '$17000', cost: '$7000', profit: '$10000'},
  ];

  headElements = ['', 'Sales', 'Cost', 'Profit']; 

  // Chart for Daily Report
  public chartType_dailyReport: string = 'line';
  public chartDatasets_dailyReport: Array<any> = [{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 22, 25, 32, 36, 32, 30, 28, 43, 50, 60, 20, 0, 0, 0 ], label: 'Sales by Hour' }];
  public chartLabels_dailyReport: Array<any> = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  public chartColors_dailyReport: Array<any> = [
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
    }
  ];
  public chartOptions_dailyReport: any = {
    responsive: true
  };

  // Chart for Daily Report
  public chartType_topDishes: string = 'horizontalBar';
  public chartDatasets_topDishes: Array<any> = [{ data: [30, 27, 20, 0 ], label: 'Top Dishes' }];
  public chartLabels_topDishes: Array<any> = ['Liver & Fishball Noodles', 'Fishball Beehoon', 'Dry Fishball Noodles',''];
  public chartColors_topDishes: Array<any> = [
      {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
      }
  ];
  public chartOptions_topDishes: any = {
    responsive: true
  };
  
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

