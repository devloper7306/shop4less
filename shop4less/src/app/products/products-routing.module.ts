import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'view-all-product', component: ViewAllProductComponent },
  {
    path: 'view-all-product-by-category',
    component: ViewAllProductByCategoryComponent,
  },
  {
    path: 'view-all-product-by-date',
    component: ViewAllProductByDateComponent,
  },
  { path: 'view-all-product', component: ViewAllProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
