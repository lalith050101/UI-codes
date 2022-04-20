import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { todoStatus, todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-by-category',
  templateUrl: './todos-by-category.component.html',
  styleUrls: ['./todos-by-category.component.css']
})
export class TodosByCategoryComponent implements OnInit {
  status = todoStatus;
  todos: todo[];
  category: string;

  constructor(private toastService: ToastNotificationService, private todoService: TodoService, private route: ActivatedRoute) {  
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.todoService.getTodos();
  });
    this.todoService.todos$.subscribe(todos => {
      this.todos = todos});
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.category = routeParams.get('category');
    this.todoService.getTodos();
  }

  onRemovetodoItem(id: string) {
    this.todoService.removeTODO(id); 
    this.toastService.showWarning("Removed TODO item...", "Remove TODO");    
  }

  onStatusChange(id: string) {
    this.todoService.changeStatus(id); 
    this.toastService.showSuccess("TODO Status changed...", "Change Status");
  }
 
}
