import { Component, Input } from '@angular/core';
import { Todo } from '../todoarray';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  constructor (private service : TodosService){}

open: boolean = false

  setOpen(){
    this.open = true
  }
  unsetOpen(){
    this.open= false
  }

  delete(item : Todo){
    this.service.deleteItem(item)
    console.log(item);

  }

  @Input() item : Todo = {
    id: '',
    title: "",
    content: ""
  }

}
