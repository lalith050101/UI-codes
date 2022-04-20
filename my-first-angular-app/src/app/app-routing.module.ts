import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent}, 
  { path: 'todos', component: TodosComponent}, 
  { path: 'todos/category/:category', loadChildren: () => import('./components/todos-by-category/todos-by-category.module').then(m => m.TodosByCategoryModule) },
  { path: 'todo/:id', loadChildren: () => import('./components/todo-details/todo-details.module').then(m => m.TodoDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
