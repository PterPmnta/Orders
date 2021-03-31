import { Component, OnInit } from '@angular/core';
import { S_OrdersService } from '../Services/S_Orders.service';

@Component({
  selector: 'app-Orders',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public orderService: S_OrdersService) { }

  ngOnInit() {
    this.orderService.order
    console.log(this.orderService.order.ClientId)
  }

  get totalOrder(){
    let totalOrder = 0
    this.orderService.order.Detail.forEach((order) => {
      totalOrder += order.Price * order.Stock
    })
    return totalOrder
  }

  calculateTotal(stock: number){
    console.log(stock)
    if(stock > 0){
      this.orderService.saveLastOrder()
    }
  }

  saveFinalOrder(){
    this.orderService.saveDefinitiveOrder()
  }

  deleteItem(position: number){
    this.orderService.order.Detail.splice(position, 1)
    this.orderService.saveLastOrder()
  }

}
