import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  fProduct : FormGroup;
  products : Product = {};
  // products : FormGroup = new FormGroup({
  //   id : new FormControl( "",Validators.required),
  //   name : new FormControl("",Validators.required),
  //   price : new FormControl("",Validators.min(1)),
  //   manufacturer : new FormControl()
  // })
  constructor(private formBuilder : FormBuilder,private productService : ProductService,private active : ActivatedRoute,private  router:Router) {

  }

  ngOnInit(): void {
    this.buildForm();
    if(this.router.url.includes("/product/create")){
      return;
    }
    this.active.paramMap.subscribe((pa : ParamMap)=>{
      const idActive = pa.get("id");
      this.productService.findById(idActive).subscribe(value => {
        this.products = value;
        this.buildForm();
      })
    })
  }
  // productSubmit(){
  //   const product = this.products.value;
  //   this.productService.save(product).subscribe(()=>{
  //     this.products.reset()
  //     alert('thêm mới thành công')
  //     this.router.navigateByUrl("/list");
  //   },e =>{
  //     console.log(e);
  //   });
  // }
  productSubmit(){
    this.products = this.fProduct.value;
    this.productService.save(this.products).subscribe(data =>{
      this.router.navigateByUrl("/list");
    })
  }
  buildForm(){
      this.fProduct = this.formBuilder.group({
        id:[this.products === undefined ? "":this.products.id],
        name:[this.products === undefined ? "":this.products.name],
        manufacturer:[this.products === undefined ? "":this.products.manufacturer],
        price:[this.products === undefined ? "":this.products.price],
      })
  }

}
