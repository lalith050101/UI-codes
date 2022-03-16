import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export enum todoStatus {
  Pending='Pending', 
  Completed='Completed'
}

export interface todo {
  id: Number;
  description: string;
  status: todoStatus;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id: number = 1;
  description: string; 
  todos : todo[] = [];
  status = todoStatus;

  constructor(private toastr: ToastrService) {  }

  addTODO() {
    let todoObj = {} as todo;
    todoObj.id = this.id;
    this.id += 1;
    todoObj.description = this.description;
    todoObj.status = todoStatus.Pending;
    this.todos.push(todoObj);
    this.showSuccess();
  }


  descriptionChanged() {

  }

  onStatusChange(id: Number) {
    let itemIndex = this.todos.findIndex(todoItem => todoItem.id === id);
    if(this.todos[itemIndex].status === todoStatus.Completed){
      this.todos[itemIndex].status = todoStatus.Pending;
      this.showPending();
    }
    else{
      this.todos[itemIndex].status = todoStatus.Completed;
      this.showCompleted();
    }
    console.log("change todo status in parent");
    
  }

  onRemovetodoItem(id: Number) {
    let itemIndex = this.todos.findIndex(todoItem => todoItem.id === id);
    delete this.todos[itemIndex];
    console.log("remove todo item in parent");
    
  }


  showSuccess() {
    // error, success, warning, info
    this.toastr.success("Added TODO Item...", "Add TODO", {
      timeOut: 5000
    });
  }

  showError() {
    this.toastr.error("Error for you...", "Error", {
    });
  }

  showWarning() {
    this.toastr.warning("Warning ...", "Warning", {
    });
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
