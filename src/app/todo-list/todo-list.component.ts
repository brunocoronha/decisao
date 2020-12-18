import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: string[] = [];
  doneList: string[] = [];
  itemToAdd: string;
  
  addToList() {
    if(this.itemToAdd){
      this.todoList.push(this.itemToAdd);
    }
  }
  doItem(index: number) {
    this.doneList.push(this.todoList[index]);
    this.todoList.splice(index, 1);
  }
  removeFromDoneList(index: number){
    this.doneList.splice(index, 1);
  }
  limpaLista(){
    this.todoList = [];
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}