import getLocalStorage from './loadStorage.js';
import ToDoItem from './todoItem.js';

export default class ToDoList {
  constructor() {
    this.items = getLocalStorage();
  }

  addItem(description) {
    this.items.push(new ToDoItem(description));
    localStorage.setItem('todoList', JSON.stringify(this.items));
  }

  removeItem(index) {
    this.items.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.items));
  }

  toggleCompleted(index) {
    this.items[index].completed = !this.items[index].completed;
    localStorage.setItem('todoList', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}