import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
/*----------------------Import connection with firebase---------------------------*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
/*----------------------Import file environment---------------------------*/
import { environment } from '../environments/environment';
/*----------------------Import Services---------------------------*/
import { ProductService } from './services/product.service';
/*----------------------Import Animations browser---------------------------*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*----------------------Import Toastr---------------------------*/
import { ToastrModule } from 'ngx-toastr';
/*----------------------Import Components---------------------------*/
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
