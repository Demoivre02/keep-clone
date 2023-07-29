import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todoarray';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  id: any = ''
  content = new FormControl;
  title = new FormControl;
  closable = false;
  itemList : Todo [] = []
  childObject!: {id: any, title: string, content: string };


  constructor(private myServices: TodosService,
              private auth : AuthServiceService) { }

  updatePlaceholder() {
    this.closable = true;
  }

  logOut(){
    this.auth.logout()
  }

  ngOnInit() {
    this.myServices.getItem().subscribe(
      (res: any[]) => {
        this.itemList = res.map((e: any) => {
          const data = e.payload.doc.data();
          const id = e.payload.doc.id;
          return { id, ...data };
        });
      },
      (err: any) => {
        console.error(err.message);
      }
    )
  }

  close() {
    this.closable = false;
    this.myServices.addItem(this.childObject={
      id: this.id,
      title : this.title.value,
      content : this.content.value
    })
    this.title.setValue('');
    this.content.setValue('');
  }


}
