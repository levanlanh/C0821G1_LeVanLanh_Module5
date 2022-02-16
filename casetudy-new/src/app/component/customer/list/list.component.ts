import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
customers: Customer[] = [];
  ngOnInit(): void {
  }

}
