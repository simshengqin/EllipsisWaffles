import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-stocks-recommender',
  templateUrl: './company-stocks-recommender.component.html',
  styleUrls: ['./company-stocks-recommender.component.scss']
})
export class CompanyStocksRecommenderComponent implements OnInit {
  // yahooFinance = require('yahoo-finance');
  constructor() { }

  ngOnInit(): void {
  }
  // yahooFinance.historical()
  // yahooFinance.historical({
  //                           symbol: 'AAPL',
  //                           from: '2012-01-01',
  //                           to: '2012-12-31',
  //                           // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  //                         }, function (err, quotes) {
  //   //...
  // });

}
