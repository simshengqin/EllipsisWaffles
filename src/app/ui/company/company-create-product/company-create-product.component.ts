import { Component, OnInit } from '@angular/core';
import {APIService, Company, Product} from "../../../API.service";

@Component({
  selector: 'app-company-create-product',
  templateUrl: './company-create-product.component.html',
  styleUrls: ['./company-create-product.component.scss']
})
export class CompanyCreateProductComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.createProduct();
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
    console.log(newProductDB);
  }

}

