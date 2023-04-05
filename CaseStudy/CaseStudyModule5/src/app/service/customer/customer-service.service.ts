import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Customer } from 'src/app/model/customer/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customer : Customer[];

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("  http://localhost:3000/customer");
  }

  findById(number: number) : Observable<Customer> {
    return this.httpClient.get<Customer>("http://localhost:3000/customer/" + number);
  }

  delete(number: number){
    return this.httpClient.delete("http://localhost:3000/customer/" + number);
  }

  addNew(customer) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/customer", customer);
  }

  update(customer, id : number) : Observable<any>{
    return this.httpClient.put<any>("http://localhost:3000/customer/" + id, customer);
  }
}
