import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { todo, TodoService, todoStatus } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  status = todoStatus;
  
  todos: todo[];

  constructor(private todoService: TodoService, private toastService: ToastNotificationService) {      
    this.todoService.todos$.subscribe(todos => {      
      this.todos = todos});
  }

  ngOnInit(): void {
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
