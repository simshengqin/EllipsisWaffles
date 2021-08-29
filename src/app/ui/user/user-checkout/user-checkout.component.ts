import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {APIService, Company, ModelProductFilterInput, Product, Transaction} from "../../../API.service";

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.scss']
})
export class UserCheckoutComponent implements OnInit {
  product: Product;
  transactions: Transaction[] = [];
  constructor(
    private api: APIService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(async params => {
      const id = params.id;
      console.log("Product id: " + id);
      const filter : ModelProductFilterInput= {
        id: {"eq": id}
      }
      this.api.ListProducts(filter).then(event => {
        this.product = (event.items as Array<Product>)[0];
      });
    });
    // this.createTransaction();
  }

  async createTransaction(): Promise<void> {
    const newTransaction = {
      user_id: "1",
      company_name: "Song Kee Fishball Noodle",
      company_address: "100 Yio Chu Kang Rd, Singapore 545576",
      product_name: this.product.name,
      price: this.product.price,
      status: "preparing",
    };
    const newTransactionDB = await this.api.CreateTransaction(newTransaction);
    this.toastrService.success('Successfully purchased ' + this.product.name + " from Song Kee Fishball Noodle!");
    this.router.navigate(['/user/view-transactions']);
    console.log(newTransactionDB);
  }

}

