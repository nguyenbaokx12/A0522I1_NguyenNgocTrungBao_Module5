import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,private router : Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');    // get id từ link
      const product = this.productService.findById(this.id); // lấy id đó tìm product
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  ngOnInit(): void {
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert("Cập nhật thành công!!!");
    this.router.navigateByUrl("/list");
  }

}
