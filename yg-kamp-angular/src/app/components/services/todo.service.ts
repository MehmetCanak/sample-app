import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl="https://jsonplaceholder.typicode.com/todos";

 

  constructor(private httpClient:HttpClient) { }

  
  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }
}
