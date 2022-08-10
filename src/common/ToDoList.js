import ToDoItem from './todoItem.js';

export default class ToDoList {
  constructor() {
    this.items = [];
  }

  addItem(description) {
    this.items.push(new ToDoItem(description));
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  toggleCompleted(index) {
    this.items[index].completed = !this.items[index].completed;
  }

  getItems() {
    return this.items;
  }
}