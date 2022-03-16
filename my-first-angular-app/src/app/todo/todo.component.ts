import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo, todoStatus } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  status = todoStatus;
  
  @Input() todoItem: todo;
  @Output() statusChanged = new EventEmitter<Number>();
  constructor() { }

  changeStatus(id: Number) {
    this.statusChanged.emit(id);
    console.log("change todo status");
    
  }

  ngOnInit(): void {
  }

}
