import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor() {
  }

  public student = new Array();

  ngOnInit(): void {
    this.student = this.getStudent();
  }

  private getStudent() {
    return [
      {name: 'Nghĩa', gender: 'nam', point: 8},
      {name: 'Đông', gender: 'nam', point: 7},
      {name: 'Anh', gender: 'nam', point: 7},
      {name: 'Hiếu', gender: 'nam', point: 9},
    ];
  }
}
