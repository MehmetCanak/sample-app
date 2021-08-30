import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  todos:Product[]=[];
  dataLoaded=false;
 
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    
  }
  getProducts(){
    
    this.productService.getProducts().subscribe(response=>{
      this.todos=response.data
      console.log(this.todos);
      this.dataLoaded=true;
    });
  }

}


 // todos:Product[]=[
  //   this.todo1,this.todo2,this.todo3,this.todo4,this.todo5
  // ];

  // todo1={
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // }
  // todo2={
  //   "userId": 1,
  //   "id": 2,
  //   "title": "quis ut nam facilis et officia qui",
  //   "completed": false
  // }
  // todo3={
  //   "userId": 1,
  //   "id": 3,
  //   "title": "fugiat veniam minus",
  //   "completed": false
  // }
  // todo4={
  //   "userId": 1,
  //   "id": 4,
  //   "title": "et porro tempora",
  //   "completed": true
  // }
  // todo5={
  //   "userId": 1,
  //   "id": 5,
  //   "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //   "completed": false
  // }


  // todos=[
  //   this.todo1,
  //   this.todo2,
  // ];

  // product1 ={
  //     productId:1,
  //     productName:"bardak",
  //     categoryId:1,
  //     unitPrice:5,
  //     unitsInStock:4
  // }
  // product2 ={
  //   productId:2,
  //   productName:"laptop",
  //   categoryId:1,
  //   unitPrice:5
  // }
  // product3 ={
  //   productId:3,
  //   productName:"mause",
  //   categoryId:1,
  //   unitPrice:5
  // }
  // product4 ={
  //   productId:4,
  //   productName:"keyboard",
  //   categoryId:1,
  //   unitPrice:5
  // }
  // product5 ={
  //   productId:5,
  //   productName:"camera",
  //   categoryId:1,
  //   unitPrice:5
  // }
  
  // products=[
  //     this.product1,
  //     this.product2,
  //     this.product3,
  //     this.product4,
  //     this.product5,
  // ];
  // products:Product[]=[
  //     this.product1,
  //     this.product2,
  //     this.product3,
  //     this.product4,
  //     this.product5,
  // ];