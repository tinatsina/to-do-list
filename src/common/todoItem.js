import getLocalStorage from './loadStorage.js';
import makeId from './keygen.js';

export default class ToDoItem {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = getLocalStorage().length + 1;
    this.id = makeId();
  }
}