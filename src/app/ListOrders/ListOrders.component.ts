import { Component, OnInit } from '@angular/core';
import { Orders } from '../Models/IOrders';
import { S_OrdersService } from '../Services/S_Orders.service';

@Component({
  selector: 'app-ListOrders',
  templateUrl: './ListOrders.component.html',
  styleUrls: ['./ListOrders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  orderList: Orders[] = new Array<Orders>()  
  constructor(public dataOrderFromService: S_OrdersService) { }

  ngOnInit() {
    this.orderList = this.dataOrderFromService.listOrders
  }

  get totalOrder(){
    let totalOrder = 0
    this.dataOrderFromService.order.Detail.forEach((order) => {
      totalOrder += order.Price * order.Stock
    })
    return totalOrder
  }

}
