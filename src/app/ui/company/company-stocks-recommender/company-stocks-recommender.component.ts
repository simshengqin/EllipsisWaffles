import { Component, OnInit } from '@angular/core';
import * as Http from "http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-company-stocks-recommender',
  templateUrl: './company-stocks-recommender.component.html',
  styleUrls: ['./company-stocks-recommender.component.scss']
})
export class CompanyStocksRecommenderComponent implements OnInit {
  data: any;
  ticker: string = "SPY";
  currentPrice: string;
  constructor(
    private httpClient: HttpClient,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.updateChart();
  }
  retrieveExchangeRate(): Promise<any> {
    console.log("updating stock..");
    return this.httpClient.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=SGD&apikey=3Z4DKJIWKLCMPT93').toPromise();
  }
  retrieveStock(): Promise<any> {
    console.log("updating stock..");
    return this.httpClient.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=' + this.ticker + '&outputsize=compact&apikey=3Z4DKJIWKLCMPT93').toPromise();
  }
  async updateChart() {
    this.data = await this.retrieveStock();
    console.log(this.data);
    this.chartDatasets[0].data = [];
    this.chartLabels = [];
    const dataPromise = await this.retrieveExchangeRate();
    const exchangeRate = dataPromise["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
    this.currentPrice = "";
    for (let key in this.data["Monthly Adjusted Time Series"]) {
      if (this.currentPrice == "") {
        this.currentPrice = this.data["Monthly Adjusted Time Series"][key]["5. adjusted close"];
      }
      let value = this.data["Monthly Adjusted Time Series"][key];
      this.chartDatasets[0].data.push(+value["5. adjusted close"] * +exchangeRate);
      this.chartDatasets[1].data.push(((+value["1. open"] - +value["5. adjusted close"]) / +value["1. open"]) * 100);
      this.chartLabels.push(key);
      this.chartDatasets2[0].data.push(+value["6. volume"]);
      this.chartLabels2.push(key);
    }
    this.chartDatasets[0].label = this.ticker;
    // this.chartDatasets[0].data = this.chartDatasets[0].data.sort();
    // this.chartLabels = this.chartLabels.sort();
    this.chartDatasets[0].data = this.chartDatasets[0].data.reverse();
    this.chartDatasets[1].data = this.chartDatasets[1].data.reverse();
    this.chartDatasets2[0].data = this.chartDatasets2[0].data.reverse();
    this.chartLabels = this.chartLabels.reverse();
    this.chartLabels2 = this.chartLabels2.reverse();
    // console.log(this.chartDatasets[0].data);
    // console.log(this.chartLabels);
  }
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [], label: this.ticker},
    { data: [], label: "Monthly Return"},
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  // public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
    ,
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];


  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  public chartType2: string = 'bar';

  public chartDatasets2: Array<any> = [
    { data: [], label: 'Volumes' }
  ];

  public chartLabels2: Array<any> = [];

  public chartColors2: Array<any> = [
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      // backgroundColor: [
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)'
      // ],
      // borderColor: [
      //   'rgba(255,99,132,1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)'
      // ],
      borderWidth: 2,
    }
  ];

  public chartOptions2: any = {
    responsive: true
  };
}
