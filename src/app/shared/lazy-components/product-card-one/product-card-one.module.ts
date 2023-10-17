import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneComponent } from './product-card-one.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductCardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductCardOneComponent
  ]
})
export class ProductCardOneModule { }
