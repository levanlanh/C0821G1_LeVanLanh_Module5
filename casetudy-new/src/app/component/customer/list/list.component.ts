import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customers: Customer[] = [];
  id: number;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(value => {
      this.customers = value;
      console.log(this.customers);
    });
  }

  getId(id: number) {
    this.id = id;
  }
}
