import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardLoaderComponent } from './product-card-loader.component';



@NgModule({
  declarations: [
    ProductCardLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductCardLoaderComponent
  ]
})
export class ProductCardLoaderModule { }
