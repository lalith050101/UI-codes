import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry, Subject } from 'rxjs';

export enum todoStatus {
  Pending='Pending', 
  Completed='Completed'
}

export interface todo {
  id: string;
  title: string;
  description: string;
  status: todoStatus;
  category: string;
  createdDateTime: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos  = new Subject<todo[]>();
  readonly todos$ = this._todos.asObservable();

  private baseUrl = "https://todo-angular-yvlk-default-rtdb.firebaseio.com/";
  private todos: todo[]=[];

  addTODO(title: string, description: string, category: string) {
    let todoObj = {} as todo;
    todoObj.title = title;
    todoObj.description = description;
    todoObj.category = category;
    todoObj.status = todoStatus.Pending;
    todoObj.createdDateTime = new Date();

    this.http.post<any>(this.baseUrl+'todos.json', todoObj).subscribe((data) => {
      if (data) {
        console.log("added");
        this.getTodos();
      }

    });
  }

  removeTODO(id: string) {
    this.http.delete<todo[]>(this.baseUrl + `todos/${id}.json`).subscribe((data) => {
        this.getTodos();
    });
  }

  changeStatus(id: string) {
    
    let itemIndex = this.todos.findIndex(todoItem => todoItem.id === id);
    var st: string = this.todos[itemIndex].status === todoStatus.Completed ? todoStatus.Pending : todoStatus.Completed;

    this.http.patch<todo[]>(this.baseUrl + `todos/${id}.json`, {status:st}).subscribe((data) => {
      if (data) {        
        this.getTodos();
      }
    });
  }

  getTodos() {
    return this.http.get<todo[]>(this.baseUrl+'todos.json').subscribe((data) => {
      this.todos = [];
      if (data) {        
        this.todos = Object.keys(data).map((key: any) => {
          data[key].id = key;
          return data[key];
        });
      }      
      this._todos.next(this.todos);
    });
  }

  getTodo(id: string): Observable<todo>{
    return this.http.get<todo>(this.baseUrl+`todos/${id}.json`);
  }

  constructor(private http: HttpClient) {  }
}
