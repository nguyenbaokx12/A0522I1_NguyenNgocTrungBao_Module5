import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeServiceComponent,
    HotelListComponent,
    ResortListComponent,
    RoomListComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
