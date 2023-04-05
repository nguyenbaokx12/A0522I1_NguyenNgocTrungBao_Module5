import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] = [{id : 1,name : "iphone",price:1000,manufacturer : "USA"},
    {id : 2,name : "Sam Sung",price:1000,manufacturer : "USA"},
    {id : 3,name : "Nokia",price:2000,manufacturer : "VN"},
    {id : 4,name : "iphone",price:10032,manufacturer : "TQ"}]

  private API_URL = "http://localhost:3000/product";
  constructor(private _httpClient : HttpClient) { }

  getAll(): Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.API_URL);
  }
  save(product):Observable<Product>{
    return this._httpClient.post<Product>(this.API_URL,product)
  }
  delete(id) : Observable<Product>{
     return this._httpClient.delete<Product>(this.API_URL +'/'+id);
    }


  findById(id: any) : Observable<Product> {
    return this._httpClient.get<Product>(this.API_URL+'/'+id);
  }
  update(id : number , product : Product){
    for (let i = 0; i<this.products.length;i++){
      if(this.products[i].id == id){
        this.products[i] = product;
      }
    }
  }
}
