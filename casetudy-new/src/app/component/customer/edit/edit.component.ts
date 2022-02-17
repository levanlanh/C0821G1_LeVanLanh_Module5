import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getCustomer(this.id);
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = this.fb.group({
        id: customer.id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        phone: customer.phone,
        idCard: customer.idCard,
        gender: customer.gender,
        birthDay: customer.birthDay,
        codeNumber: customer.codeNumber,
        customerType: customer.customerType,
      });
    });
  }

  updateCustomer(id: number) {
  }
}
