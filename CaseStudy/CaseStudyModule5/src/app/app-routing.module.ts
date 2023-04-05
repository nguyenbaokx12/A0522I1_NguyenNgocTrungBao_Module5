import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';
import { HotelListComponent } from './home-service/hotel/hotel-list/hotel-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


const routes: Routes = [
  { path: '', component: ServiceListComponent },
  { path: 'hotel', component: HotelListComponent },
  { path: "customer", component: CustomerListComponent },
  { path: "customer/delete/:id", component: CustomerListComponent },
  { path: "customer/create", component: CustomerCreateComponent },
  { path: "customer/edit/:id", component: CustomerEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
