import { Todo } from '../models/todo.models';

export class TodoController {
  todos: Todo[] = [];

  constructor() {
    this.loadTodos();
  }

  addTodo(task: string): void {
    const newTodo = new Todo(this.todos.length + 1, task);
    this.todos.push(newTodo);
    this.saveTodos();
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
  }

  toggleComplete(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    }
  }

  getTodos(filter: 'all' | 'completed' | 'pending'): Todo[] {
    if (filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    } else if (filter === 'pending') {
      return this.todos.filter((todo) => !todo.completed);
    }
    return this.todos;
  }

  private saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadTodos(): void {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }
}
