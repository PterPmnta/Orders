import { Injectable } from '@angular/core';
import { Products } from '../Models/IProducts';

@Injectable({
  providedIn: 'root'
})

export class AddProductService {

  constructor() { }

  saveLocalProducts(products: Products){
    let getProductsFromLocal: Products[] = this.localProducts
    products.Id = getProductsFromLocal.length + 1;
    getProductsFromLocal.push(products)
    localStorage.setItem("Products", JSON.stringify(getProductsFromLocal))
  }

  get localProducts(): Products[]{
    let localProducts: Products[] = JSON.parse(localStorage.getItem("Products")!)
    if(localProducts === null){
      return new Array<Products>();
    }
    return localProducts
  }

}
