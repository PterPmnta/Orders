import { Component, OnInit } from '@angular/core';
import { IProducts, Products } from '../Models/IProducts';
import { AddProductService } from '../Services/AddProduct.service';
import { S_OrdersService } from '../Services/S_Orders.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss']
})
export class ProductsComponent implements OnInit {
    
  requestProducts: any;
  dataProducts: Array<Products> = new Array<Products>();

  constructor(public productService: AddProductService, public orderService: S_OrdersService) { }

  ngOnInit() {
    this.dataProducts = this.productService.localProducts
  }  

  get localDataProducts(): IProducts[]{
    let productLocal: IProducts[] = JSON.parse(localStorage.getItem("Products")!)
    if(productLocal === null){
      return new Array<IProducts>();
    }
    return productLocal
  }

  getProducts(){
    this.requestProducts = JSON.parse(localStorage.getItem("Products")!);
  }

  deleteProducts(){
    localStorage.removeItem("Products")
  }

  deleteAllStorageData(){
    localStorage.clear();
  }  

  searchProducts(event: any){
    let productFind: string = event.target.value
    this.dataProducts = this.productService.localProducts.filter(product => {
      return product.Name.toLowerCase().includes(productFind)
    })
  }

  addProduct(product: Products){
    //debugger
    this.orderService.order.addProductOrder(product)
    this.orderService.saveLastOrder()
  }

}
