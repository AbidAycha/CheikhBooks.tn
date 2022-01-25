import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private service: OrderService) { }

  ngOnInit(): void {
    this.load()
  }

  orders: any = [];
  newAttribute: any = {};

  load() {
    this.service
      .getOrders()
      .subscribe((data) => {
        this.orders = data;
        console.log(data)
      });
  }
  add() {
    this.orders.push(this.newAttribute)
    this.newAttribute = {};
  }
  edit(index: number, order: any) {

  }
  delete(index: number, order: any) {
    this.orders.splice(index, 1);
  }

}
