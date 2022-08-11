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

  removeItem(description) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].description === description) {
        this.items.splice(i, 1);
        for (let i = 0; i < this.items.length; i += 1) {
          this.items[i].index = i + 1;
        }
        localStorage.setItem('todoList', JSON.stringify(this.items));
      }
    }
  }

  toggleCompleted(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].id === id) {
        this.items[i].completed = !this.items[i].completed;
        localStorage.setItem('todoList', JSON.stringify(this.items));
      }
    }
  }

  clearCompleted() {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].completed) {
        this.items.splice(i, 1);
        i -= 1;
      }
    }
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].index = i + 1;
    }
    localStorage.setItem('todoList', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}