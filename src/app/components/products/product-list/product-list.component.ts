import { Component, OnInit } from '@angular/core';
/*-----import services */
import { ProductService } from '../../../services/product.service';
/*-----import ngx-toastr */
import { ToastrService } from 'ngx-toastr';
/*-----import class Product */
import { Product } from '../../../models/product';

import { element } from 'protractor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private productList: Product[];

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.GetProducts()
      //metod changes database
      .snapshotChanges()
      //get items subscribe
      .subscribe(items => {
        this.productList = [];
        items.forEach(element => {
          //converter to data in json payload
          let json = element.payload.toJSON();
          //create variable key 
          json['key'] = element.key;
          //add push data key with format Product
          this.productList.push(json as Product)
        })
      })
  }

  OnEditProduct = (product: Product) => {
    //selectedProduct asignament objet assign for remove double data link
    this.productService.selectedProduct = Object.assign({}, product);
  }

  OnDeleteProduct = (key: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      this.productService.DeleteProduct(key);
      this.toastr.success('Remove item', 'Successfull!');
    }
  }

}
