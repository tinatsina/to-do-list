// import ToDoList from './ToDoList.js';

// const onclickList = new ToDoList();

export default function onClickEvents() {
  document.querySelector('.add-to-list-icon').addEventListener('click', () => {
    alert('Add item');
  });
}