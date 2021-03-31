
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clients } from '../Models/IClients';
import { ServiceClientsService } from '../Services/ServiceClients.service';

@Component({
  selector: 'app-Clients',
  templateUrl: './Clients.component.html',
  styleUrls: ['./Clients.component.scss']
})

export class ClientsComponent implements OnInit {

  saveDataForm!: FormGroup;
  clients: Clients = new Clients();

  constructor(private fb: FormBuilder, public serviceClient: ServiceClientsService) { }

  ngOnInit() {
    this.saveDataForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  saveClients(){
    this.clients = this.saveDataForm.value as Clients;
    this.serviceClient.saveClients(this.clients);
    this.saveDataForm.reset();
  }

}
