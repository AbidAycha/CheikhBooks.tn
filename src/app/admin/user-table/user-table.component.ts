import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: Array<any> = [1,2,3];
  newAttribute: any = {};

  add() {
    this.users.push(this.newAttribute)
    this.newAttribute = {};
  }
  edit(index:number) {

  }
  delete(index:number) {
    this.users.splice(index, 1);
  }

}
