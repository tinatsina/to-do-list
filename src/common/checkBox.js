function onCheckTrue(todoList) {
  document.addEventListener('DOMContentLoaded', () => {
    const checkBox = document.querySelectorAll('.to-be-checked');
    checkBox.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        // alert(e.target.parentElement.children[1].innerText);
        // alert(e.target.parentElement.getAttribute('id'));
        todoList.toggleCompleted(e.target.parentElement.getAttribute('id'));
      });
    });
  });
}

export default onCheckTrue;