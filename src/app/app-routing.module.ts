import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './AddProduct/AddProduct.component';
import { ClientsComponent } from './Clients/Clients.component';
import { HomeComponent } from './Home/Home.component';
import { ListOrdersComponent } from './ListOrders/ListOrders.component';
import { OrdersComponent } from './Orders/Orders.component';
import { ProductsComponent } from './Products/Products.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'addproduct', component: AddProductComponent
  },
  {
    path: 'orderlist', component: ListOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
