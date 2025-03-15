
import { Todo } from '../models/todo.models';

export class TodoController {
  todos: Todo[] = [];

  addTodo(task: string): void {
    const newTodo = new Todo(this.todos.length + 1, task);
    this.todos.push(newTodo);
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleComplete(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
  
  getTodos(filter: 'all' | 'completed' | 'pending'): Todo[] {
    if (filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    } else if (filter === 'pending') {
      return this.todos.filter(todo => !todo.completed);
    }
    return this.todos; 
  }
}
