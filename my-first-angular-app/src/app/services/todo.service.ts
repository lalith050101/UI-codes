import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum todoStatus {
  Pending='Pending', 
  Completed='Completed'
}

export interface todo {
  id: Number;
  description: string;
  status: todoStatus;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id: number = 1;
  private _todos  = new Subject<todo[]>();
  readonly todos$ = this._todos.asObservable();

  private todos: todo[]=[];

  addTODO(description: string) {
    let todoObj = {} as todo;
    todoObj.id = ++this.id;
    todoObj.description = description;
    todoObj.status = todoStatus.Pending;
    this.todos.push(todoObj)
    this._todos.next(this.todos);
  }

  removeTODO(id: Number) {
    let itemIndex = this.todos.findIndex(todoItem => todoItem.id === id);
    this.todos.splice(itemIndex,1);
    this._todos.next(this.todos);    
  }

  changeStatus(id: Number) {

    let itemIndex = this.todos.findIndex(todoItem => todoItem.id === id);
    this.todos[itemIndex].status = this.todos[itemIndex].status === todoStatus.Completed ? todoStatus.Pending : todoStatus.Completed;
    this._todos.next(this.todos);
  }

  constructor() { }
}
