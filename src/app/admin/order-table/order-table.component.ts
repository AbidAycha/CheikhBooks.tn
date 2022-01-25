import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders: Array<any> = [1,2,3];
  newAttribute: any = {};

  add() {
    this.orders.push(this.newAttribute)
    this.newAttribute = {};
  }
  edit(index:number) {

  }
  delete(index:number) {
    this.orders.splice(index, 1);
  }

}
