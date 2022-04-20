import { Component, OnInit } from '@angular/core';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { TodoService, todoStatus } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;
  description: string; 
  category: string = 'work';
  status = todoStatus;
  
  constructor(private toastService: ToastNotificationService, private todoService: TodoService) {   }

  ngOnInit(): void { }

  addTODO() {
    this.todoService.addTODO(this.title, this.description, this.category);    
    this.toastService.showSuccess("Added new TODO item...", "Add TODO");
  }

}
