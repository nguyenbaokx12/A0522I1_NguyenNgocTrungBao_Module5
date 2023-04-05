import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products : Product[] | undefined;

product : Product | undefined;
id :number;
// DI
  private subscription : Subscription | undefined;
  constructor(private productService : ProductService,private active : ActivatedRoute,private router : Router) {
    this.active.paramMap.subscribe((paramap : ParamMap)=>{
      this.delete(paramap.get("id"));
    })
  }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.subscription= this.productService.getAll().subscribe(
      data => {
        this.products = data;
      },error => {
        console.log("that bai")
      });
  }

  delete(id) {
    this.productService.delete(id).subscribe(()=>{
      this.router.navigateByUrl("/list");
    },e=>{
      console.log(e);
    });
    console.log('aaaaa')
  }
}
