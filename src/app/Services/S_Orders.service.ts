import { Injectable } from '@angular/core';
import { Orders } from '../Models/IOrders';

@Injectable({
  providedIn: 'root'
})

export class S_OrdersService {  
  
  order: Orders = new Orders();

  constructor() { 
    this.order.addProductOrder 
    this.order = this.localOrder 
  }  

  get countOrders() {

    let localOrders: Orders[] = JSON.parse(localStorage.getItem("Orders")!) 
    if(localOrders === null){
      return 0
    }else{
      return localOrders.length
    }   
    
  }

  saveLastOrder(){
    localStorage.setItem("lastOrder", JSON.stringify(this.order))
  }

  get localOrder(): Orders{

    let orderInLocal: Record<string, any> | null = JSON.parse(localStorage.getItem("lastOrder")!)
    if(orderInLocal === null){
      return new Orders
    }
    return Orders.fromJson<Orders>(orderInLocal)

  } 

  saveDefinitiveOrder(){

    let orderList: Orders[] = new Array<Orders>()
    orderList = this.listOrders    
    orderList.push(this.order)
    localStorage.setItem("Orders", JSON.stringify(orderList))
    localStorage.removeItem("lastOrder")
    this.order = new Orders

  }  

  get listOrders(): Orders[]{
    
    let localOrders: Orders[] = JSON.parse(localStorage.getItem("Orders")!)
    if(localOrders === null){
      return new Array<Orders>()
    }
    return localOrders.sort((indexOne,IndexTwo) => IndexTwo.Id - indexOne.Id)    
    
  }

}
