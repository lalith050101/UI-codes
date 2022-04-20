import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  id: string;
  todoItem: todo ;
  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.todoService.getTodo(this.id).subscribe(
        data => {
          this.todoItem = data;
        },
        e => console.log(e),
        () => console.log('Todo item fetched')
      );
  });
    
   }

  ngOnInit(): void {
    console.log("on init called in todo details");
    
   }

}
