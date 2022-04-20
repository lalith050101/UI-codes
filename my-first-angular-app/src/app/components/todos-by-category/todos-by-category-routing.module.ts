import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosByCategoryComponent } from './todos-by-category.component';

const routes: Routes = [{ path: '', component: TodosByCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosByCategoryRoutingModule { }
