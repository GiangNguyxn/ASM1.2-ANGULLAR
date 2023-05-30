import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addPProduct(product:IProduct):Observable<any>{
    return this.http.post(`http://localhost:3000/products`,product)
  }
  getAllProducts(): Observable<any>{
    return this.http.get(`http://localhost:3000/products`)
  }
  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProductById(id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:IProduct):Observable<any>{
    return this.http.patch(`http://localhost:3000/products/${product.id}`,product)
  }
}
