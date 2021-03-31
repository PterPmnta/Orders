import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './Heading/Heading.component';
import { ClientsComponent } from './Clients/Clients.component';
import { ProductsComponent } from './Products/Products.component';
import { OrdersComponent } from './Orders/Orders.component';
import { HomeComponent } from './Home/Home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './AddProduct/AddProduct.component';
import { ServiceClientsService } from './Services/ServiceClients.service';
import { AddProductService } from './Services/AddProduct.service';
import { S_OrdersService } from './Services/S_Orders.service';
import { ListOrdersComponent } from './ListOrders/ListOrders.component';

@NgModule({
  declarations: [							
    AppComponent,
    HeadingComponent,
    ClientsComponent,
    ProductsComponent,
    OrdersComponent,
    HomeComponent,
    AddProductComponent,
      ListOrdersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ServiceClientsService,
    AddProductService,
    S_OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
