import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    HomeComponent,
    FilterProductComponent,
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class PagesModule { }
