import { Component, OnInit } from '@angular/core';
import { todo, TodoService, todoStatus } from 'src/app/services/todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  todos: todo[] = [];
  completed: number = 0;
  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe(todos => this.todos = todos);
    this.todoService.todos$.subscribe(todos => this.completed = todos.filter(todo =>
       todo.status === todoStatus.Completed).length);
   }

  ngOnInit(): void {
  }

}
