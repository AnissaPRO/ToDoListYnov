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

  addTodo(): void {
    if (this.taskInput.trim()) {
      this.todoController.addTodo(this.taskInput);
      this.taskInput = '';  
    }
  }

  removeTodo(id: number): void {
    this.todoController.removeTodo(id);
  }

  toggleComplete(id: number): void {
    this.todoController.toggleComplete(id);
  }

  get todos(): Todo[] {
    return this.todoController.todos;
  }
}


