import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailsComponent } from './products-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
       canActivate: [ProductDetailGuard] ,
       component: ProductsDetailsComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
