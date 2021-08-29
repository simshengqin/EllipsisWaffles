import { Component, OnInit } from '@angular/core';
import {APIService, Company, Transaction} from "../../../API.service";

@Component({
  selector: 'app-company-expansion-analysis',
  templateUrl: './company-expansion-analysis.component.html',
  styleUrls: ['./company-expansion-analysis.component.scss']
})
export class CompanyExpansionAnalysisComponent implements OnInit {
  
  viewCompany1:boolean = true;
  viewCompany2:boolean = false;
  viewCompany3:boolean = false;
  year:string = "2020";
  
  // Company 1
  public chartType_com1: string = 'line';
  public chartDatasets_com1: Array<any> = [{ data: [30, 20, 40, 65, 60, 63, 55, 45, 70, 65, 56, 78], label: '2020' }]
  public chartLabels_com1: Array<any> =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];;
  public chartColors_com1: Array<any> = [
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
    }
  ];
  public chartOptions_com1: any = {
    responsive: true
  };
  // Company 2
  public chartType_com2: string = 'line';
  public chartDatasets_com2: Array<any> = [{ data: [15, 56, 23, 34, 39, 45, 23, 26, 19, 40, 34, 40], label: '2020' }]
  public chartLabels_com2: Array<any> =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];;
  public chartColors_com2: Array<any> = [
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2,
    }
  ];
  public chartOptions_com2: any = {
    responsive: true
  };
  // Company 3
  public chartType_com3: string = 'line';
  public chartDatasets_com3: Array<any> = [{ data: [11, 34, 26, 56, 36, 45, 11, 30, 40, 45, 20, 62], label: '2020' }]
  public chartLabels_com3: Array<any> =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];;
  public chartColors_com3: Array<any> = [
    {
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 0.2)',
      borderWidth: 2,
    }
  ];
  public chartOptions_com3: any = {
    responsive: true
  };

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

  switch(data:string){
    if(data=="com1"){
      this.viewCompany1 = true
      this.viewCompany2 = false
      this.viewCompany3 = false
    }
    if(data=="com2"){
      this.viewCompany1 = false
      this.viewCompany2 = true
      this.viewCompany3 = false
    }
    if(data=="com3"){
      this.viewCompany1 = false
      this.viewCompany2 = false
      this.viewCompany3 = true
    }
  }

  switchYear(data:string):void{
    if(data=="2020"){
      this.year = "2020"
      this.switchYearData()
    } else if (data == "2019"){
      this.year = "2019"
      this.switchYearData()
    }
  }

  switchYearData():void{
    if(this.year=="2020"){
      this.chartDatasets_com1 = [{ data: [30, 20, 40, 65, 60, 63, 55, 45, 70, 65, 56, 78], label: '2020' }]
      this.chartDatasets_com2 = [{ data: [15, 56, 23, 34, 39, 45, 23, 26, 19, 40, 34, 40], label: '2020' }]
      this.chartDatasets_com3 = [{ data: [11, 34, 26, 56, 36, 45, 11, 30, 40, 45, 20, 62], label: '2020' }]
    } else if (this.year=="2019"){
      this.chartDatasets_com1 = [{ data: [10, 30, 23, 56, 34, 47, 87, 77, 68, 87, 30, 50], label: '2019' }]
      this.chartDatasets_com2 = [{ data: [25, 35, 40, 44, 23, 36, 50, 51, 44, 57, 12, 30], label: '2019' }]
      this.chartDatasets_com3 = [{ data: [7, 19, 34, 28, 39, 45, 43, 60, 43, 55, 47, 55], label: '2019' }]
    }
  }

}

