import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';


const routes: Routes = [{
  path : "list",
  component: ProductListComponent
},{
  path: "product/create",
  component: ProductCreateComponent
},{
  path: "product/:id",
  component: ProductListComponent

},{
  path: "product/edit/:id",
  component : ProductCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
