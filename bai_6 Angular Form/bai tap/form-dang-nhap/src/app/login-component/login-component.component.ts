import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  login: FormGroup;

  constructor() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login.value));
  }
}
