import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.createProduct();
    this.loadProducts();
  }

  async createProduct(): Promise<void> {
    const newProduct = {
      name: "Chicken Rice",
      company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
      image_url: "",
      type: "Meal",
      price: 3.55,
      quantity: 100,
    };
    const newProductDB = await this.api.CreateProduct(newProduct);
  }
  loadProducts(): void {
    this.api.ListProducts().then(event => {
      this.products = event.items as Array<Product>;
      console.log(this.products);
    });
  }

}

