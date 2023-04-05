import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel/hotel';
import { Star } from '../../model/hotel/star';
import { HotelService } from '../../service/hotel/hotel.service';
import { StarService } from '../../service/hotel/star.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  starList: Star[] = [];
  hotel: Hotel;

  constructor(private hotelService: HotelService,
    private starService: StarService) { }

  ngOnInit(): void {
    this.getAllHotel();
    this.getAllStar();
  }

  getAllHotel() {
    this.hotelService.getAllHotel().subscribe(data => {
      this.hotels = data;
    })
  }
  getAllStar() {
    this.starService.getAllStar().subscribe(data => {
      this.starList = data;
    })
  }

}
