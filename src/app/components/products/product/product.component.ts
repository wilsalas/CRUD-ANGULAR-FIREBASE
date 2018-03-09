import { Component, OnInit } from '@angular/core';
//import ngform 
import { NgForm } from '@angular/forms';
//Import services product
import { ProductService } from '../../../services/product.service';
/*-----import ngx-toastr */
import { ToastrService } from 'ngx-toastr';
/*----------------Import models/class Product------------*/
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    //initialize get data 
    this.productService.GetProducts();
    //initialize reset form
    this.ResetForm()
  }

  /*create metod onsubmit form */
  OnSubmitProduct = (productForm: NgForm) => {
    if (productForm.value.key == null)
      this.productService.InsertProduct(productForm.value);
    else
      this.productService.UpdateProduct(productForm.value);

    this.ResetForm(productForm)
    this.toastr.info('Success Operation', 'Success Operation')
  }
  /*create metod reset form */
  ResetForm = (productForm?: NgForm) => {
    if (productForm != null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }

}
