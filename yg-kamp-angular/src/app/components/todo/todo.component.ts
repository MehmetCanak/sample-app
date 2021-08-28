import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];
  dataLoaded=false;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }
  getTodos(){
    this.todoService.getTodos().subscribe(response=>{
      this.todos=response
      console.log(response);
      this.dataLoaded=true;
    });
  }

}
