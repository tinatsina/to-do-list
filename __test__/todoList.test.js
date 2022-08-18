import ToDoList from '../src/common/ToDoList.js';

describe('ToDoList', () => {
  // Add and remove items
  test('Add 1 item', () => {
    const todoList = new ToDoList();
    localStorage.clear();
    todoList.addItem('ToDoItem 1');
    expect(todoList.getItems()[0].description).toBe('ToDoItem 1');
  });
  test('Add 2 more remove 1', () => {
    const todoList = new ToDoList();
    todoList.addItem('ToDoItem 2');
    todoList.addItem('ToDoItem 3');
    todoList.removeItem('ToDoItem 2');
    expect(todoList.getItems()[1].description).toBe('ToDoItem 3');
  });
  test('Add 2 and count length', () => {
    const todoList = new ToDoList();
    todoList.addItem('ToDoItem 4');
    todoList.addItem('ToDoItem 5');
    todoList.removeItem('ToDoItem 1');
    expect(todoList.getItems().length).toBe(3);
  });
  test('Remove all remaining --> legnth = 0', () => {
    const todoList = new ToDoList();
    todoList.removeItem('ToDoItem 3');
    todoList.removeItem('ToDoItem 4');
    todoList.removeItem('ToDoItem 5');
    expect(todoList.getItems().length).toBe(0);
  });
  test('check the size', () => {
    const todoList = new ToDoList();
    localStorage.clear();
    todoList.addItem('ToDo');
    const sz = todoList.length;
    expect(sz).not.toBeNull();
  });
});
