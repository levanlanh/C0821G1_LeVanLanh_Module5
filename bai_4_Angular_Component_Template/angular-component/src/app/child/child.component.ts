import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {
  }

  @Input()
  valueFromParent: string;

  valueToParent = 'hello parent (output!)';

  @Output()
  eventEmitter = new EventEmitter();

  ngOnInit(): void {
  }

  sendToParent(): void {
    this.eventEmitter.emit(this.valueToParent);
  }
}
