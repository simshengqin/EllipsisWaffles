import { Component, OnInit } from '@angular/core';
import {APIService, Company} from '../../../API.service';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
  }


}
