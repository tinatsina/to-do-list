function onCheckTrue(todoList) {
  document.addEventListener('DOMContentLoaded', () => {
    const checkBox = document.querySelectorAll('.to-be-checked');
    checkBox.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        todoList.toggleCompleted(e.target.parentElement.getAttribute('id'));
      });
    });
  });
}

function clearChecked(todoList) {
  document.addEventListener('DOMContentLoaded', () => {
    const clearAllChecked = document.querySelector('.clear-all-checked');
    clearAllChecked.addEventListener('click', () => {
      todoList.clearCompleted();
      document.location.reload(true);
    });
  });
}

export { onCheckTrue, clearChecked };