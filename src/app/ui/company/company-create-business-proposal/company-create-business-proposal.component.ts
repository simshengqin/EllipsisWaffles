import { Component, OnInit } from '@angular/core';
import {APIService, Company, BusinessProposal} from "../../../API.service";

@Component({
  selector: 'app-company-create-business-proposal',
  templateUrl: './company-create-business-proposal.component.html',
  styleUrls: ['./company-create-business-proposal.component.scss']
})
export class CompanyCreateBusinessProposalComponent implements OnInit {
  businessProposals: BusinessProposal[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.createBusinessProposal();
  }

  async createBusinessProposal(): Promise<void> {
    const newBusinessProposal = {
      monthly_revenue: 1,
      monthly_expense: 2,
      monthly_profit: 3,
      available_goldman_sachs_account: 4,
      company_asset: 5,
      other_capital: 6,
      cash_on_hand: 7,
      other_liablities: 8,
    };
    const newBusinessProposalDB = await this.api.CreateBusinessProposal(newBusinessProposal);
    console.log(newBusinessProposalDB);
  }

}

