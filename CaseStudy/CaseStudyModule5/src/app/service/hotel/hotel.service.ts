import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/model/hotel/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotel: Hotel[] = [];
  private url = "http://localhost:3000/hotel";
  

  constructor(private http: HttpClient) { }


  getAllHotel(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url)
  }

  saveHotel(hotels){
    if (hotels.id){
      return this.http.put(this.url + '/' + hotels.id,hotels);
    }
    return this.http.post(this.url,hotels);
  }

}
