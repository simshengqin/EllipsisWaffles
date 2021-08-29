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
    // this.createProduct();
  }

  async createProduct(): Promise<void> {
    const newProduct = {
      name: "Fishball Beehoon",
      company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
      image_url: "https://amplify-ellipsiswaffles-dev-155122-deployment.s3.ap-southeast-1.amazonaws.com/pictures/Menu+-+Song+Kee+Fish+Ball+Noodle+-+Fishball+Beehoon.jpg",
      price: 3.55
    };

    // const newProduct = {
    //   name: "Dry Fishball Noodles",
    //   company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
    //   image_url: "https://amplify-ellipsiswaffles-dev-155122-deployment.s3.ap-southeast-1.amazonaws.com/pictures/Menu+-+Song+Kee+Fish+Ball+Noodle+-+Dry+Fishball+Noodles.jpg",
    //   price: 3.70,
    // };

    // const newProduct = {
    //   name: "Liver & Fishball Noodles",
    //   company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
    //   image_url: "https://amplify-ellipsiswaffles-dev-155122-deployment.s3.ap-southeast-1.amazonaws.com/pictures/Menu+-+Song+Kee+Fish+Ball+Noodle+-+Liver+_+Fishball+Noodles.jpg",
    //   price: 3.90,
    // };

    // const newProduct = {
    //   name: "Fish Ball Soup",
    //   company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
    //   image_url: "https://amplify-ellipsiswaffles-dev-155122-deployment.s3.ap-southeast-1.amazonaws.com/pictures/Menu+-+Song+Kee+Fish+Ball+Noodle+-Fish+Ball+Soup.jpg",
    //   price: 2.80,
    // };

    // const newProduct = {
    //   name: "Laksa",
    //   company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
    //   image_url: "https://amplify-ellipsiswaffles-dev-155122-deployment.s3.ap-southeast-1.amazonaws.com/pictures/Menu+-+Song+Kee+Fish+Ball+Noodle+-Laksa.jpg",
    //   price: 3.50,
    // };

    // const newProduct = {
    //   name: "Meat Ball Noodles",
    //   company_id: "c1fe4026-5c99-4b2b-8bdc-6cb5eaa68d4b",
    //   image_url: "https://amplify-ellipsiswaffles-dev-155122-deployment.s3.ap-southeast-1.amazonaws.com/pictures/Menu+-+Song+Kee+Fish+Ball+Noodle+-Meat+Ball+Noodles.jpg",
    //   price: 3.50,
    // };

    const newProductDB = await this.api.CreateProduct(newProduct);
    console.log(newProductDB);
  }

}

