/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserInput = {
  id?: string | null;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  cart?: ModelStringInput | null;
  contact_number?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type User = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateCompanyInput = {
  id?: string | null;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  rating?: ModelFloatInput | null;
  type?: ModelStringInput | null;
  latitude?: ModelFloatInput | null;
  longitude?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateProductInput = {
  id?: string | null;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  company_id?: ModelStringInput | null;
  image_url?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type Product = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteProductInput = {
  id: string;
};

export type CreateTransactionInput = {
  id?: string | null;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelTransactionConditionInput = {
  user_id?: ModelStringInput | null;
  company_name?: ModelStringInput | null;
  company_address?: ModelStringInput | null;
  product_name?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTransactionConditionInput | null> | null;
  or?: Array<ModelTransactionConditionInput | null> | null;
  not?: ModelTransactionConditionInput | null;
};

export type Transaction = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateTransactionInput = {
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteTransactionInput = {
  id: string;
};

export type CreateFinanceAccountInput = {
  id?: string | null;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelFinanceAccountConditionInput = {
  name?: ModelStringInput | null;
  account_number?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelFinanceAccountConditionInput | null> | null;
  or?: Array<ModelFinanceAccountConditionInput | null> | null;
  not?: ModelFinanceAccountConditionInput | null;
};

export type FinanceAccount = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateFinanceAccountInput = {
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteFinanceAccountInput = {
  id: string;
};

export type CreateLoanInput = {
  id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelLoanConditionInput = {
  company_name?: ModelStringInput | null;
  company_address?: ModelStringInput | null;
  company_number?: ModelFloatInput | null;
  applicant_name?: ModelStringInput | null;
  applicant_id?: ModelStringInput | null;
  loan_amount?: ModelFloatInput | null;
  payment_period?: ModelStringInput | null;
  interest_rate?: ModelFloatInput | null;
  loan_approval_date?: ModelStringInput | null;
  reason_for_loan?: ModelStringInput | null;
  loan_period?: ModelStringInput | null;
  maturity_date?: ModelStringInput | null;
  paying_account_id?: ModelStringInput | null;
  amount_unpaid?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  business_proposal_id?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLoanConditionInput | null> | null;
  or?: Array<ModelLoanConditionInput | null> | null;
  not?: ModelLoanConditionInput | null;
};

export type Loan = {
  __typename?: "Loan";
  id?: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateLoanInput = {
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteLoanInput = {
  id: string;
};

export type CreateBusinessProposalInput = {
  id?: string | null;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelBusinessProposalConditionInput = {
  monthly_revenue?: ModelFloatInput | null;
  monthly_expense?: ModelFloatInput | null;
  monthly_profit?: ModelFloatInput | null;
  available_goldman_sachs_account?: ModelFloatInput | null;
  company_asset?: ModelFloatInput | null;
  other_capital?: ModelFloatInput | null;
  cash_on_hand?: ModelFloatInput | null;
  other_liablities?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBusinessProposalConditionInput | null> | null;
  or?: Array<ModelBusinessProposalConditionInput | null> | null;
  not?: ModelBusinessProposalConditionInput | null;
};

export type BusinessProposal = {
  __typename?: "BusinessProposal";
  id?: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateBusinessProposalInput = {
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteBusinessProposalInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  cart?: ModelStringInput | null;
  contact_number?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  rating?: ModelFloatInput | null;
  type?: ModelStringInput | null;
  latitude?: ModelFloatInput | null;
  longitude?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items?: Array<Company | null> | null;
  nextToken?: string | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  company_id?: ModelStringInput | null;
  image_url?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items?: Array<Product | null> | null;
  nextToken?: string | null;
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null;
  user_id?: ModelStringInput | null;
  company_name?: ModelStringInput | null;
  company_address?: ModelStringInput | null;
  product_name?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTransactionFilterInput | null> | null;
  or?: Array<ModelTransactionFilterInput | null> | null;
  not?: ModelTransactionFilterInput | null;
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection";
  items?: Array<Transaction | null> | null;
  nextToken?: string | null;
};

export type ModelFinanceAccountFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  account_number?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelFinanceAccountFilterInput | null> | null;
  or?: Array<ModelFinanceAccountFilterInput | null> | null;
  not?: ModelFinanceAccountFilterInput | null;
};

export type ModelFinanceAccountConnection = {
  __typename: "ModelFinanceAccountConnection";
  items?: Array<FinanceAccount | null> | null;
  nextToken?: string | null;
};

export type ModelLoanFilterInput = {
  id?: ModelIDInput | null;
  company_name?: ModelStringInput | null;
  company_address?: ModelStringInput | null;
  company_number?: ModelFloatInput | null;
  applicant_name?: ModelStringInput | null;
  applicant_id?: ModelStringInput | null;
  loan_amount?: ModelFloatInput | null;
  payment_period?: ModelStringInput | null;
  interest_rate?: ModelFloatInput | null;
  loan_approval_date?: ModelStringInput | null;
  reason_for_loan?: ModelStringInput | null;
  loan_period?: ModelStringInput | null;
  maturity_date?: ModelStringInput | null;
  paying_account_id?: ModelStringInput | null;
  amount_unpaid?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  business_proposal_id?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLoanFilterInput | null> | null;
  or?: Array<ModelLoanFilterInput | null> | null;
  not?: ModelLoanFilterInput | null;
};

export type ModelLoanConnection = {
  __typename: "ModelLoanConnection";
  items?: Array<Loan | null> | null;
  nextToken?: string | null;
};

export type ModelBusinessProposalFilterInput = {
  id?: ModelIDInput | null;
  monthly_revenue?: ModelFloatInput | null;
  monthly_expense?: ModelFloatInput | null;
  monthly_profit?: ModelFloatInput | null;
  available_goldman_sachs_account?: ModelFloatInput | null;
  company_asset?: ModelFloatInput | null;
  other_capital?: ModelFloatInput | null;
  cash_on_hand?: ModelFloatInput | null;
  other_liablities?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBusinessProposalFilterInput | null> | null;
  or?: Array<ModelBusinessProposalFilterInput | null> | null;
  not?: ModelBusinessProposalFilterInput | null;
};

export type ModelBusinessProposalConnection = {
  __typename: "ModelBusinessProposalConnection";
  items?: Array<BusinessProposal | null> | null;
  nextToken?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateTransactionMutation = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateTransactionMutation = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteTransactionMutation = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateFinanceAccountMutation = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateFinanceAccountMutation = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteFinanceAccountMutation = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateLoanMutation = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateLoanMutation = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteLoanMutation = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateBusinessProposalMutation = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateBusinessProposalMutation = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteBusinessProposalMutation = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    username?: string | null;
    cart?: string | null;
    contact_number?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListCompaniesQuery = {
  __typename: "ModelCompanyConnection";
  items?: Array<{
    __typename: "Company";
    id: string;
    name?: string | null;
    address?: string | null;
    rating?: number | null;
    type?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items?: Array<{
    __typename: "Product";
    id: string;
    name?: string | null;
    company_id?: string | null;
    image_url?: string | null;
    price?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTransactionQuery = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListTransactionsQuery = {
  __typename: "ModelTransactionConnection";
  items?: Array<{
    __typename: "Transaction";
    id: string;
    user_id?: string | null;
    company_name?: string | null;
    company_address?: string | null;
    product_name?: string | null;
    price?: number | null;
    status?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetFinanceAccountQuery = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListFinanceAccountsQuery = {
  __typename: "ModelFinanceAccountConnection";
  items?: Array<{
    __typename: "FinanceAccount";
    id: string;
    name?: string | null;
    account_number?: string | null;
    amount?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetLoanQuery = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListLoansQuery = {
  __typename: "ModelLoanConnection";
  items?: Array<{
    __typename: "Loan";
    id: string;
    company_name?: string | null;
    company_address?: string | null;
    company_number?: number | null;
    applicant_name?: string | null;
    applicant_id?: string | null;
    loan_amount?: number | null;
    payment_period?: string | null;
    interest_rate?: number | null;
    loan_approval_date?: string | null;
    reason_for_loan?: string | null;
    loan_period?: string | null;
    maturity_date?: string | null;
    paying_account_id?: string | null;
    amount_unpaid?: number | null;
    status?: string | null;
    business_proposal_id?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetBusinessProposalQuery = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListBusinessProposalsQuery = {
  __typename: "ModelBusinessProposalConnection";
  items?: Array<{
    __typename: "BusinessProposal";
    id: string;
    monthly_revenue?: number | null;
    monthly_expense?: number | null;
    monthly_profit?: number | null;
    available_goldman_sachs_account?: number | null;
    company_asset?: number | null;
    other_capital?: number | null;
    cash_on_hand?: number | null;
    other_liablities?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username?: string | null;
  cart?: string | null;
  contact_number?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name?: string | null;
  company_id?: string | null;
  image_url?: string | null;
  price?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateTransactionSubscription = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateTransactionSubscription = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteTransactionSubscription = {
  __typename: "Transaction";
  id: string;
  user_id?: string | null;
  company_name?: string | null;
  company_address?: string | null;
  product_name?: string | null;
  price?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateFinanceAccountSubscription = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateFinanceAccountSubscription = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteFinanceAccountSubscription = {
  __typename: "FinanceAccount";
  id: string;
  name?: string | null;
  account_number?: string | null;
  amount?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateLoanSubscription = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateLoanSubscription = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteLoanSubscription = {
  __typename: "Loan";
  id: string;
  company_name?: string | null;
  company_address?: string | null;
  company_number?: number | null;
  applicant_name?: string | null;
  applicant_id?: string | null;
  loan_amount?: number | null;
  payment_period?: string | null;
  interest_rate?: number | null;
  loan_approval_date?: string | null;
  reason_for_loan?: string | null;
  loan_period?: string | null;
  maturity_date?: string | null;
  paying_account_id?: string | null;
  amount_unpaid?: number | null;
  status?: string | null;
  business_proposal_id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateBusinessProposalSubscription = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateBusinessProposalSubscription = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteBusinessProposalSubscription = {
  __typename: "BusinessProposal";
  id: string;
  monthly_revenue?: number | null;
  monthly_expense?: number | null;
  monthly_profit?: number | null;
  available_goldman_sachs_account?: number | null;
  company_asset?: number | null;
  other_capital?: number | null;
  cash_on_hand?: number | null;
  other_liablities?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async CreateTransaction(
    input: CreateTransactionInput,
    condition?: ModelTransactionConditionInput
  ): Promise<CreateTransactionMutation> {
    const statement = `mutation CreateTransaction($input: CreateTransactionInput!, $condition: ModelTransactionConditionInput) {
        createTransaction(input: $input, condition: $condition) {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTransactionMutation>response.data.createTransaction;
  }
  async UpdateTransaction(
    input: UpdateTransactionInput,
    condition?: ModelTransactionConditionInput
  ): Promise<UpdateTransactionMutation> {
    const statement = `mutation UpdateTransaction($input: UpdateTransactionInput!, $condition: ModelTransactionConditionInput) {
        updateTransaction(input: $input, condition: $condition) {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTransactionMutation>response.data.updateTransaction;
  }
  async DeleteTransaction(
    input: DeleteTransactionInput,
    condition?: ModelTransactionConditionInput
  ): Promise<DeleteTransactionMutation> {
    const statement = `mutation DeleteTransaction($input: DeleteTransactionInput!, $condition: ModelTransactionConditionInput) {
        deleteTransaction(input: $input, condition: $condition) {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTransactionMutation>response.data.deleteTransaction;
  }
  async CreateFinanceAccount(
    input: CreateFinanceAccountInput,
    condition?: ModelFinanceAccountConditionInput
  ): Promise<CreateFinanceAccountMutation> {
    const statement = `mutation CreateFinanceAccount($input: CreateFinanceAccountInput!, $condition: ModelFinanceAccountConditionInput) {
        createFinanceAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFinanceAccountMutation>response.data.createFinanceAccount;
  }
  async UpdateFinanceAccount(
    input: UpdateFinanceAccountInput,
    condition?: ModelFinanceAccountConditionInput
  ): Promise<UpdateFinanceAccountMutation> {
    const statement = `mutation UpdateFinanceAccount($input: UpdateFinanceAccountInput!, $condition: ModelFinanceAccountConditionInput) {
        updateFinanceAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFinanceAccountMutation>response.data.updateFinanceAccount;
  }
  async DeleteFinanceAccount(
    input: DeleteFinanceAccountInput,
    condition?: ModelFinanceAccountConditionInput
  ): Promise<DeleteFinanceAccountMutation> {
    const statement = `mutation DeleteFinanceAccount($input: DeleteFinanceAccountInput!, $condition: ModelFinanceAccountConditionInput) {
        deleteFinanceAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFinanceAccountMutation>response.data.deleteFinanceAccount;
  }
  async CreateLoan(
    input: CreateLoanInput,
    condition?: ModelLoanConditionInput
  ): Promise<CreateLoanMutation> {
    const statement = `mutation CreateLoan($input: CreateLoanInput!, $condition: ModelLoanConditionInput) {
        createLoan(input: $input, condition: $condition) {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLoanMutation>response.data.createLoan;
  }
  async UpdateLoan(
    input: UpdateLoanInput,
    condition?: ModelLoanConditionInput
  ): Promise<UpdateLoanMutation> {
    const statement = `mutation UpdateLoan($input: UpdateLoanInput!, $condition: ModelLoanConditionInput) {
        updateLoan(input: $input, condition: $condition) {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLoanMutation>response.data.updateLoan;
  }
  async DeleteLoan(
    input: DeleteLoanInput,
    condition?: ModelLoanConditionInput
  ): Promise<DeleteLoanMutation> {
    const statement = `mutation DeleteLoan($input: DeleteLoanInput!, $condition: ModelLoanConditionInput) {
        deleteLoan(input: $input, condition: $condition) {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLoanMutation>response.data.deleteLoan;
  }
  async CreateBusinessProposal(
    input: CreateBusinessProposalInput,
    condition?: ModelBusinessProposalConditionInput
  ): Promise<CreateBusinessProposalMutation> {
    const statement = `mutation CreateBusinessProposal($input: CreateBusinessProposalInput!, $condition: ModelBusinessProposalConditionInput) {
        createBusinessProposal(input: $input, condition: $condition) {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBusinessProposalMutation>response.data.createBusinessProposal;
  }
  async UpdateBusinessProposal(
    input: UpdateBusinessProposalInput,
    condition?: ModelBusinessProposalConditionInput
  ): Promise<UpdateBusinessProposalMutation> {
    const statement = `mutation UpdateBusinessProposal($input: UpdateBusinessProposalInput!, $condition: ModelBusinessProposalConditionInput) {
        updateBusinessProposal(input: $input, condition: $condition) {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBusinessProposalMutation>response.data.updateBusinessProposal;
  }
  async DeleteBusinessProposal(
    input: DeleteBusinessProposalInput,
    condition?: ModelBusinessProposalConditionInput
  ): Promise<DeleteBusinessProposalMutation> {
    const statement = `mutation DeleteBusinessProposal($input: DeleteBusinessProposalInput!, $condition: ModelBusinessProposalConditionInput) {
        deleteBusinessProposal(input: $input, condition: $condition) {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBusinessProposalMutation>response.data.deleteBusinessProposal;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            cart
            contact_number
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanies(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompaniesQuery> {
    const statement = `query ListCompanies($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            rating
            type
            latitude
            longitude
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompaniesQuery>response.data.listCompanies;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            company_id
            image_url
            price
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  async GetTransaction(id: string): Promise<GetTransactionQuery> {
    const statement = `query GetTransaction($id: ID!) {
        getTransaction(id: $id) {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTransactionQuery>response.data.getTransaction;
  }
  async ListTransactions(
    filter?: ModelTransactionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTransactionsQuery> {
    const statement = `query ListTransactions($filter: ModelTransactionFilterInput, $limit: Int, $nextToken: String) {
        listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user_id
            company_name
            company_address
            product_name
            price
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTransactionsQuery>response.data.listTransactions;
  }
  async GetFinanceAccount(id: string): Promise<GetFinanceAccountQuery> {
    const statement = `query GetFinanceAccount($id: ID!) {
        getFinanceAccount(id: $id) {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFinanceAccountQuery>response.data.getFinanceAccount;
  }
  async ListFinanceAccounts(
    filter?: ModelFinanceAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFinanceAccountsQuery> {
    const statement = `query ListFinanceAccounts($filter: ModelFinanceAccountFilterInput, $limit: Int, $nextToken: String) {
        listFinanceAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            account_number
            amount
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFinanceAccountsQuery>response.data.listFinanceAccounts;
  }
  async GetLoan(id: string): Promise<GetLoanQuery> {
    const statement = `query GetLoan($id: ID!) {
        getLoan(id: $id) {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLoanQuery>response.data.getLoan;
  }
  async ListLoans(
    filter?: ModelLoanFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLoansQuery> {
    const statement = `query ListLoans($filter: ModelLoanFilterInput, $limit: Int, $nextToken: String) {
        listLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company_name
            company_address
            company_number
            applicant_name
            applicant_id
            loan_amount
            payment_period
            interest_rate
            loan_approval_date
            reason_for_loan
            loan_period
            maturity_date
            paying_account_id
            amount_unpaid
            status
            business_proposal_id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLoansQuery>response.data.listLoans;
  }
  async GetBusinessProposal(id: string): Promise<GetBusinessProposalQuery> {
    const statement = `query GetBusinessProposal($id: ID!) {
        getBusinessProposal(id: $id) {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBusinessProposalQuery>response.data.getBusinessProposal;
  }
  async ListBusinessProposals(
    filter?: ModelBusinessProposalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBusinessProposalsQuery> {
    const statement = `query ListBusinessProposals($filter: ModelBusinessProposalFilterInput, $limit: Int, $nextToken: String) {
        listBusinessProposals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            monthly_revenue
            monthly_expense
            monthly_profit
            available_goldman_sachs_account
            company_asset
            other_capital
            cash_on_hand
            other_liablities
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBusinessProposalsQuery>response.data.listBusinessProposals;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          cart
          contact_number
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateCompanyListener: Observable<
    SubscriptionResponse<OnCreateCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCompanySubscription>>;

  OnUpdateCompanyListener: Observable<
    SubscriptionResponse<OnUpdateCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCompanySubscription>>;

  OnDeleteCompanyListener: Observable<
    SubscriptionResponse<OnDeleteCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          address
          rating
          type
          latitude
          longitude
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCompanySubscription>>;

  OnCreateProductListener: Observable<
    SubscriptionResponse<OnCreateProductSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProductSubscription>>;

  OnUpdateProductListener: Observable<
    SubscriptionResponse<OnUpdateProductSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProductSubscription>>;

  OnDeleteProductListener: Observable<
    SubscriptionResponse<OnDeleteProductSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          company_id
          image_url
          price
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProductSubscription>>;

  OnCreateTransactionListener: Observable<
    SubscriptionResponse<OnCreateTransactionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTransaction {
        onCreateTransaction {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTransactionSubscription>>;

  OnUpdateTransactionListener: Observable<
    SubscriptionResponse<OnUpdateTransactionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTransaction {
        onUpdateTransaction {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTransactionSubscription>>;

  OnDeleteTransactionListener: Observable<
    SubscriptionResponse<OnDeleteTransactionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTransaction {
        onDeleteTransaction {
          __typename
          id
          user_id
          company_name
          company_address
          product_name
          price
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTransactionSubscription>>;

  OnCreateFinanceAccountListener: Observable<
    SubscriptionResponse<OnCreateFinanceAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFinanceAccount {
        onCreateFinanceAccount {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFinanceAccountSubscription>>;

  OnUpdateFinanceAccountListener: Observable<
    SubscriptionResponse<OnUpdateFinanceAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFinanceAccount {
        onUpdateFinanceAccount {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFinanceAccountSubscription>>;

  OnDeleteFinanceAccountListener: Observable<
    SubscriptionResponse<OnDeleteFinanceAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFinanceAccount {
        onDeleteFinanceAccount {
          __typename
          id
          name
          account_number
          amount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFinanceAccountSubscription>>;

  OnCreateLoanListener: Observable<
    SubscriptionResponse<OnCreateLoanSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLoan {
        onCreateLoan {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateLoanSubscription>>;

  OnUpdateLoanListener: Observable<
    SubscriptionResponse<OnUpdateLoanSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLoan {
        onUpdateLoan {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateLoanSubscription>>;

  OnDeleteLoanListener: Observable<
    SubscriptionResponse<OnDeleteLoanSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLoan {
        onDeleteLoan {
          __typename
          id
          company_name
          company_address
          company_number
          applicant_name
          applicant_id
          loan_amount
          payment_period
          interest_rate
          loan_approval_date
          reason_for_loan
          loan_period
          maturity_date
          paying_account_id
          amount_unpaid
          status
          business_proposal_id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteLoanSubscription>>;

  OnCreateBusinessProposalListener: Observable<
    SubscriptionResponse<OnCreateBusinessProposalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBusinessProposal {
        onCreateBusinessProposal {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBusinessProposalSubscription>>;

  OnUpdateBusinessProposalListener: Observable<
    SubscriptionResponse<OnUpdateBusinessProposalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBusinessProposal {
        onUpdateBusinessProposal {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBusinessProposalSubscription>>;

  OnDeleteBusinessProposalListener: Observable<
    SubscriptionResponse<OnDeleteBusinessProposalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBusinessProposal {
        onDeleteBusinessProposal {
          __typename
          id
          monthly_revenue
          monthly_expense
          monthly_profit
          available_goldman_sachs_account
          company_asset
          other_capital
          cash_on_hand
          other_liablities
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBusinessProposalSubscription>>;
}
