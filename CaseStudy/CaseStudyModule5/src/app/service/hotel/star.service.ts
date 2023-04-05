import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/model/hotel/hotel';
import { Star } from 'src/app/model/hotel/star';

@Injectable({
  providedIn: 'root'
})
export class StarService {
  private url = "http://localhost:3000/star";
  list : Star[] = [];

  constructor(private http: HttpClient) { }

  getAllStar(){
    return this.http.get<Hotel[]>(this.url);
  }

  
}
