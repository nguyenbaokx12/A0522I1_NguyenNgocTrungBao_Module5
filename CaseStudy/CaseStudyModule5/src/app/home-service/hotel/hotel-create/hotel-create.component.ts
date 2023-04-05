import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Hotel } from 'src/app/model/hotel/hotel';
import { Star } from 'src/app/model/hotel/star';
import { HotelService } from 'src/app/service/hotel/hotel.service';
import { StarService } from 'src/app/service/hotel/star.service';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent implements OnInit {
starList: Star[] = [];
hotels : Hotel = {};
formHotel: FormGroup;




  constructor(private hotelService: HotelService,
              private starService: StarService,) { }

  ngOnInit(): void {
  }

  submitHotel() {
    throw new Error('Method not implemented.');
    }
}
