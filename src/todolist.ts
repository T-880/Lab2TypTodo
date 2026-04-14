import type { Todo } from "./todo";  

export class TodoList {
  private todos: Todo[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  addTodo(task: string, priority: 1 | 2 | 3): boolean {
    if (!task || task.trim() === "") return false;
    if (![1, 2, 3].includes(priority)) return false;

    const newTodo: Todo = { task: task.trim(), completed: false, priority };
    this.todos.push(newTodo);
    this.saveToLocalStorage();
    return true;
  }

  markTodoCompleted(index: number): void {
    if (this.todos[index]) {
      this.todos[index].completed = true;
      this.saveToLocalStorage();
    }
  }

  editTodo(index: number, newTask: string, newPriority: 1 | 2 | 3): boolean {
    if (!this.todos[index]) return false;
    if (!newTask || newTask.trim() === "") return false;
    if (![1, 2, 3].includes(newPriority)) return false;

    this.todos[index].task = newTask.trim();
    this.todos[index].priority = newPriority;
    this.saveToLocalStorage();
    return true;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  saveToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadFromLocalStorage(): void {
    const todosString = localStorage.getItem("todos");
    if (todosString) this.todos = JSON.parse(todosString);
  }
}