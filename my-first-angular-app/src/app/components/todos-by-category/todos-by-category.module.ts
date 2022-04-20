import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosByCategoryRoutingModule } from './todos-by-category-routing.module';
import { TodosByCategoryComponent } from './todos-by-category.component';
import { TodoCommonModule } from 'src/app/todo-common/todo-common.module';


@NgModule({
  declarations: [
    TodosByCategoryComponent
  
  ],
  imports: [
    CommonModule,
    TodoCommonModule,
    TodosByCategoryRoutingModule
  ]
})
export class TodosByCategoryModule { }
