import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() {
  }

  valueToChild = 'hello child (input!)'

  ngOnInit(): void {
  }

  receiveFromChild(value: any) : void{
    console.log("Received from child : ")
    alert(value);
  }
}
