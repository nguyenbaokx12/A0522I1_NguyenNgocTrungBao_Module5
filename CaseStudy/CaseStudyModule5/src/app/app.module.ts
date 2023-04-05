import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HotelListComponent } from './home-service/hotel/hotel-list/hotel-list.component';
import { ResortListComponent } from './home-service/resort/resort-list/resort-list.component';
import { HotelCreateComponent } from './home-service/hotel/hotel-create/hotel-create.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import {NgxPaginationModule} from "ngx-pagination";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    FooterComponent,
    HotelListComponent,
    ResortListComponent,
    HotelCreateComponent,
    ServiceListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
