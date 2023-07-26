import { Component, Input } from '@angular/core';
import { Todo } from '../todoarray';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

open: boolean = false

  setOpen(){
    this.open = true
  }
  unsetOpen(){
    this.open= false
  }

  @Input() item : Todo = {
    title: "",
    content: ""
  }

}
