import './style.css';

class ToDoItem {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const item1 = new ToDoItem('Learn React', false, 0);
const item2 = new ToDoItem('Learn Redux', false, 1);
const item3 = new ToDoItem('Learn React-Redux', false, 2);
const todoList = [item1, item2, item3];
const botContainer = document.querySelector('.bot-container');

todoList.forEach((item) => {
  botContainer.innerHTML += `
                <div class="todo-card">
                    <div class="card-items">
                        <input type="checkbox">
                        <p>${item.description}</p>
                        <h3>X</h3>
                    </div>
                    <hr>
                </div>
  `;
});
