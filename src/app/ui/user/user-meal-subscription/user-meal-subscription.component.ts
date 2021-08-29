import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {APIService, Company, Product} from '../../../API.service';
@Component({
  selector: 'user-meal-subscription',
  templateUrl: './user-meal-subscription.component.html',
  styleUrls: ['./user-meal-subscription.component.scss']
})
export class UserMealSubscriptionComponent implements OnInit {
  products: Product[] = [];
  companies: Company[] = [];
  isThreeMeal: string = "false";
  constructor(
    private api: APIService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    // this.createCompany();
    this.loadCompanies();
  }

  async createCompany(): Promise<void> {
    // const newCompany = {
    //   name: "Tian Tian Hainanese Chicken Rice",
    //   address: "1 Kadayanallur St, #01-10/11 Maxwell Food Centre, Singapore 069184",
    //   rating: 4,
    //   type: "asian",
    //   latitude: 1.280020,
    //   longitude: 103.844818,
    // };
    const newCompany = {
      name: "Eng Kee Noodle House",
      address: "254 Jurong East St 24, #01-10, Singapore 600254",
      rating: 4,
      type: "asian",
      latitude: 1.343490,
      longitude: 103.737730,
    };
    const newCompanyDB = await this.api.CreateCompany(newCompany);
  }
  loadCompanies(): void {
    this.api.ListCompanies().then(event => {
      this.companies = event.items as Array<Company>;
      console.log(this.companies);
    });
  }
  async createTransaction(company_name1: string, product_name1: string, price1: number): Promise<void> {
    const newTransaction = {
      user_id: "1",
      company_name: company_name1,
      company_address: "100 Yio Chu Kang Rd, Singapore 545576",
      product_name: product_name1,
      price: price1,
      status: "preparing",
    };
    const newTransactionDB = await this.api.CreateTransaction(newTransaction);
    this.toastrService.success('Successfully confirmed order of ' + product_name1 + " from " + company_name1);
    this.router.navigate(['/user/view-transactions']);
    console.log(newTransactionDB);
  }
}
