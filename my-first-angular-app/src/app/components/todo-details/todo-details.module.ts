import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailsRoutingModule } from './todo-details-routing.module';
import { TodoDetailsComponent } from './todo-details.component';


@NgModule({
  declarations: [
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoDetailsRoutingModule
  ]
})
export class TodoDetailsModule { }
