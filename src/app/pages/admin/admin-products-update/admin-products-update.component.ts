import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products-update',
  templateUrl: './admin-products-update.component.html',
  styleUrls: ['./admin-products-update.component.css']
})
export class AdminProductsUpdateComponent {
  product!:IProduct
  productForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(6)]],
    price:[0],
    image:['']
  })
  constructor(
    private formBuilder: FormBuilder,
    private productSer:ProductService,
    private route:ActivatedRoute,
    private navigate:Router
    
    ){
      this.route.paramMap.subscribe(param =>{
        const id = Number(param.get('id'))
        this.productSer.getProductById(id).subscribe(data=>{
          this.product = data,

          this.productForm.patchValue({
            name:data.name,
            price:data.price,
            image:data.image,

          })
        })

      })
    }
  onHandleUpdate(){
    if(this.productForm.valid){
      const newProduct:IProduct ={
        id:this.product.id,
        name:this.productForm.value.name||"",
        price:this.productForm.value.price||0,
        image:this.productForm.value.image||"",
      } 
      this.productSer.updateProduct(newProduct).subscribe(data=>{
        console.log("Cập nhật sản phẩm thành công");
        this.navigate.navigate(['admin'])
        alert("Cập nhật thành công")
        
      })
    }

  }
}
