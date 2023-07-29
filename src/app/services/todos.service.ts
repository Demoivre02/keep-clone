import { Injectable } from '@angular/core';
import { Todo } from '../todoarray';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private fireStore : AngularFirestore ) { }

  todoItems :  Todo[] =[]

  addItem(newItem : Todo){
    newItem.id = this.fireStore.createId();
    return this.fireStore.collection('/items').add(newItem)
  }

  getItem(){
    return this.fireStore.collection('/items').snapshotChanges();
  }

  deleteItem(newItem: Todo ){
    return this.fireStore.doc('/items/'+newItem.id).delete().then(()=>{
    }, err =>{
        console.error(err.message);
    })
  }

  alertTodo(newItem : Todo){
    console.log(newItem);
  }

}
