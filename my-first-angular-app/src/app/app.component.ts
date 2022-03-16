import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { todo, TodoService, todoStatus } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  description: string; 
  status = todoStatus;

  todos: todo[];

  constructor(private toastr: ToastrService, private todoService: TodoService) {  
    this.todoService.todos$.subscribe(todos => this.todos = todos);
  }

  addTODO() {
    this.todoService.addTODO(this.description);    
    this.showSuccess("Added new TODO item...", "Add TODO");
  }

  onRemovetodoItem(id: Number) {
    this.todoService.removeTODO(id); 
    this.showWarning("Removed TODO item...", "Remove TODO");
    console.log("remove todo item in parent");
    
  }

  onStatusChange(id: Number) {
    this.todoService.changeStatus(id); 
    this.showSuccess("TODO Status changed...", "Change Status");
    console.log("change todo status in parent");
    
  }

  showSuccess(message: string, title: string) {
    // error, success, warning, info
    this.toastr.success(message, title, {
      timeOut: 2000
    });
  }

  showError() {
    this.toastr.error("Error for you...", "Error", {
    });
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title);
  }

  showPending() {
    this.toastr.info("Status changed to pending...", "Pending", {
    });
  }

  showCompleted() {
    this.toastr.success("Status changed to completed...", "Completed", {
    });
  }
}
