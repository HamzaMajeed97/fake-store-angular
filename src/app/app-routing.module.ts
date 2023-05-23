import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'productlist',
    component: ProductlistComponent,
  },
  {
    path: 'products/:id',
    component: ProductdetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
