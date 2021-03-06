import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://jsonplaceholder.typicode.com/todos";

 

  constructor(private httpClient:HttpClient) { }


  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
  
  // getProducts():Observable<ProductResponseModel>{
  //   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  // }
}
