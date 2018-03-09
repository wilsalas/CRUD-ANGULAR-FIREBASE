import { Injectable } from '@angular/core';
/*----------------Access data of firebase------------*/
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/*----------------Import models/class Product------------*/
import { Product } from '../models/product';
@Injectable()
export class ProductService {
  //product list
  private productsList: AngularFireList<any>;
  //initialize empty product
  public selectedProduct: Product = new Product();
  //get database firebase
  constructor(private dbFirebase: AngularFireDatabase) { }

  GetProducts = () => {
    //get data collection products database
    return this.productsList = this.dbFirebase.list('products');
  }

  InsertProduct = (product: Product) => {
    //add new object to productsList(AngularFireList)
    this.productsList.push(this.ObjetProduct(product))
  }

  UpdateProduct = (product: Product) => {
    //update object to productsList(AngularFireList) with to key
    this.productsList.update(product.key, this.ObjetProduct(product))
  }

  DeleteProduct = (key: string) => {
    //delete object to productsList(AngularFireList) with to key
    this.productsList.remove(key)
  }

  ObjetProduct = product => {
    //object product use in insert and update
    return {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    }
  }

}
