import { Injectable } from '@angular/core';
import { Todo } from '../todoarray';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todoItems :  Todo[] =[]

  addItem(newItem : Todo){
    return this.todoItems.push(newItem)
  }

  getItem(){
     this.todoItems
    return this.todoItems

  }

  alertTodo(newItem : Todo){
    console.log(newItem);
  }

}
