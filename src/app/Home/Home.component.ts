import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from '../Models/IClients';
import { ServiceClientsService } from '../Services/ServiceClients.service';
import { S_OrdersService } from '../Services/S_Orders.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  dataClients: Array<Clients> = new Array<Clients>();

  constructor(public s_clients: ServiceClientsService, public orderService: S_OrdersService, public route: Router) { }

  ngOnInit() { 
    this.dataClients = this.s_clients.localClients
  }

  searchClients(event: any){
    let clientToFind: string = event.target.value
    this.dataClients = this.s_clients.localClients.filter(client => {
      return client.name.toLowerCase().includes(clientToFind)
    })
  }

  sendToProducts(clients: Clients){

    this.orderService.order.ClientId = clients.id
    this.orderService.order.ClientName = `${clients.name} ${clients.lastname}` 
    this.orderService.order.DateOrder = new Date()
    this.orderService.order.Id = this.orderService.countOrders + 1
    this.orderService.saveLastOrder()
    this.route.navigateByUrl("/products");

  }

}
