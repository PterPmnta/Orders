import { Injectable } from '@angular/core';
import { Clients } from '../Models/IClients';

@Injectable({
  providedIn: 'root'
})

export class ServiceClientsService {

  constructor() { }

  saveClients(clients: Clients){
    let getCLientsFromLocal: Clients[] = this.localClients
    clients.id = getCLientsFromLocal.length + 1;
    getCLientsFromLocal.push(clients)
    localStorage.setItem("Clients", JSON.stringify(getCLientsFromLocal))
  }

  get localClients(): Clients[]{
    let clientsLocal: Clients[] = JSON.parse(localStorage.getItem("Clients")!)
    if(clientsLocal === null){
      return new Array<Clients>();
    }
    return clientsLocal
  }

}
