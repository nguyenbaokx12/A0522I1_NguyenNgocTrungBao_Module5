import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { RoomListComponent } from './room-list/room-list.component';


const routes: Routes = [
  { path: '', component: HomeServiceComponent },
  { path: 'hotel', component: HotelListComponent },
  { path: 'resort', component: ResortListComponent },
  { path: 'room', component: RoomListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
