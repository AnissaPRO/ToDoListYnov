import { Component } from '@angular/core';

import { TodoController } from '../controllers/todo.controllers';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todoController = new TodoController();
  taskInput: string = '';
  todos: Todo[] = [];
  selectedFilter: 'all' | 'completed' | 'pending' = 'all';

  constructor() {
    this.updateTodos();
  }

  addTodo(): void {
    if (this.taskInput.trim()) {
      this.todoController.addTodo(this.taskInput);
      this.taskInput = '';  
      this.updateTodos();
    }
  }

  removeTodo(id: number): void {
    this.todoController.removeTodo(id);
    this.updateTodos();
  }

  toggleComplete(id: number): void {
    this.todoController.toggleComplete(id);
    this.updateTodos();
  }
  changeFilter(filter: 'all' | 'completed' | 'pending'): void {
    this.selectedFilter = filter;
    this.updateTodos();
  }

  private updateTodos(): void {
    this.todos = this.todoController.getTodos(this.selectedFilter);
  }

 
}


