import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo, todoStatus } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  status = todoStatus;
  
  @Input() todoItem: todo;
  @Output() statusChanged = new EventEmitter<string>();
  @Output() removedtodoItem = new EventEmitter<string>();
  constructor() { }

  changeStatus(id: string) {
    this.statusChanged.emit(id);    
  }

  removetodoItem(id: string) {   
    this.removedtodoItem.emit(id);
  }

  ngOnInit(): void {
  }

}
