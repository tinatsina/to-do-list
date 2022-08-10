export default function getLocalStorage() {
  let lists;

  if (localStorage.getItem('lists') === null) {
    lists = [];
  } else {
    lists = JSON.parse(localStorage.getItem('lists'));
  }
  return lists;
}
