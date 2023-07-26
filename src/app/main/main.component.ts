import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  content = new FormControl();
  title = new FormControl();
  closable = false;
  childObject!: { title: string, content: string };

  myItems :  any = []

  constructor(private myServices: TodosService) { }

  updatePlaceholder() {
    this.closable = true;
  }

  ngOnInit(){
    this.myServices.getItem()
  }


  close() {
     this.childObject = {
      title: this.title.value,
      content: this.content.value
    };

    this.closable = false;
    this.title.setValue('');
    this.content.setValue('');
    this.myServices.alertTodo(this.childObject);
    this.myItems.push(this.childObject)
    console.log(this.myItems);

  }


}
