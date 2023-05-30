import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
 products!:IProduct[]
 constructor(private productService: ProductService){
  this.productService.getAllProducts().subscribe(data=>{
    this.products=data
  })
 }
 onHandleRemove(id:any){
  this.productService.deleteProduct(id).subscribe(()=>{
    this.products = this.products.filter(item => item.id != id)
    console.log("Xóa thành công");
    
  })
  
 }
}
