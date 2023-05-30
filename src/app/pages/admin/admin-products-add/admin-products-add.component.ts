import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-products-add',
  templateUrl: './admin-products-add.component.html',
  styleUrls: ['./admin-products-add.component.css']
})
export class AdminProductsAddComponent {
  productForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(6)]],
    price:[0],
    image:['']
  })
  constructor(
    private formBuilder: FormBuilder,
    private productSer:ProductService,
    private navigate:Router
    ){}

  onHandleAdd(){
    if(this.productForm.valid){
      const newProduct:IProduct={
        name:this.productForm.value.name||"",
        price:this.productForm.value.price||0,
        image:this.productForm.value.image||"",
      }
      this.productSer.addPProduct(newProduct).subscribe(data=>{
        this.navigate.navigate(['admin'])

        console.log("Thành công",data);
        
      })
    }
  }
}
