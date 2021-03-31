import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from '../Services/AddProduct.service';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder, public ProductService: AddProductService) { }

  productAddForm!: FormGroup;

  ngOnInit() {
    this.productAddForm = this.fb.group({
      Name: ['', Validators.required],
      Brand: ['', Validators.required],
      Type: ['', Validators.required],
      Stock: ['', Validators.required],
      Price: ['', Validators.required]
    })
  }

  saveProduct(){
    this.ProductService.saveLocalProducts(this.productAddForm.value)
    this.productAddForm.reset()
  }

}
