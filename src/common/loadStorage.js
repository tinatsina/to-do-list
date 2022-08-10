export default function getLocalStorage() {
  let lists;

  if (localStorage.getItem('todoList') === null) {
    lists = [];
  } else {
    lists = JSON.parse(localStorage.getItem('todoList'));
  }
  return lists;
}
