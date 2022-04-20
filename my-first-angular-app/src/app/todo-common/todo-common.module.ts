import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    TodoComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TodoComponent,
    NavComponent
  ]
})
export class TodoCommonModule { }
