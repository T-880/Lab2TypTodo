import './style.css';
import { TodoList } from "./todolist";

const myTodoList = new TodoList();

const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const priorityInput = document.getElementById("priority-select") as HTMLSelectElement;
const todoListUl = document.getElementById("todo-list") as HTMLUListElement;
const clearTodosBtn = document.getElementById("clear-todos-btn") as HTMLButtonElement;

function renderTodos() {
  todoListUl.innerHTML = "";

  myTodoList.getTodos().forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = `${todo.task} (Prioritet: ${todo.priority})`;

    if (!todo.completed) {
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Markera som klar";
      completeBtn.addEventListener("click", () => {
        myTodoList.markTodoCompleted(index);
        renderTodos();
      });
      li.appendChild(completeBtn);
    } else {
      li.style.textDecoration = "line-through";
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "Redigera";
    editBtn.addEventListener("click", () => {
      const newTask = prompt("Redigera uppgift:", todo.task);
      const newPriorityStr = prompt("Prioritet (1-3):", todo.priority.toString());
      const newPriority = Number(newPriorityStr) as 1 | 2 | 3;

      if (newTask !== null && newPriorityStr !== null) {
        const success = myTodoList.editTodo(index, newTask, newPriority);
        if (!success) alert("Felaktiga värden! Kontrollera uppgift och prioritet.");
        renderTodos();
      }
    });
    li.appendChild(editBtn);

    todoListUl.appendChild(li);
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = taskInput.value;
  const priority = Number(priorityInput.value) as 1 | 2 | 3;

  const success = myTodoList.addTodo(task, priority);
  if (success) {
    taskInput.value = "";
    renderTodos();
  } else {
    alert("Felaktiga värden! Kontrollera uppgift och prioritet.");
  }
});

clearTodosBtn.addEventListener("click", () => {
  myTodoList.getTodos().length = 0;
  localStorage.removeItem("todos");
  renderTodos();
});

renderTodos();