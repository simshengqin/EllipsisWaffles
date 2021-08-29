import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {APIService, Company, Product} from "../../../API.service";

@Component({
  selector: 'app-user-view-companies',
  templateUrl: './user-view-company.component.html',
  styleUrls: ['./user-view-company.component.scss']
})
export class UserViewCompanyComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private api: APIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.api.ListProducts().then(event => {
      this.products = event.items as Array<Product>;
      console.log(this.products);
    });
  }
  redirectToCheckout(productId: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['user/checkout'], {queryParams: {id: productId}}));
  }

}

