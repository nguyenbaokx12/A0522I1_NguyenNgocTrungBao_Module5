import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];
  constructor(private productService : ProductService,private active:ActivatedRoute,private  rou :Router) { }

  ngOnInit(): void {
    this.getAll();
    this.active.paramMap.subscribe((pa:ParamMap)=>{
      this.deleteProduct(pa.get("id"))
    })
  }
  getAll(){
    this.products = this.productService.getAll();
    console.log(this.products);
  }
  deleteProduct(id){
    console.log(id)
    this.productService.deleteProduct(id);

    this.rou.navigateByUrl("list")
  }
}
