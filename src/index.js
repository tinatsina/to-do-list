import './style.css';
import ToDoList from './common/ToDoList.js';
import { onCheckTrue, clearChecked } from './common/checkBox.js';

const todoList = new ToDoList();

onCheckTrue(todoList);
clearChecked(todoList);

// --------------------------------------------------------------------------------------
localStorage.setItem('books', JSON.stringify(todoList.getItems()));
const books = JSON.parse(localStorage.getItem('books'));
// --------------------------------------------------------------------------------------
const botContainer = document.querySelector('.bot-container');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.add-to-list-icon').addEventListener('click', () => {
    const listItem = document.querySelector('.list-add').value;

    todoList.addItem(listItem);
    document.location.reload(true);
  });

  document.querySelectorAll('.remove-icon').forEach((item) => {
    item.addEventListener('click', (e) => {
      todoList.removeItem(e.target.parentElement.parentElement.children[1].innerText);
      document.location.reload(true);
    });
  });
});

books.forEach((item) => {
  botContainer.innerHTML += `
                <div class="todo-card" id="asd">
                    <div class="card-items" id="${item.id}">
                        <input type="checkbox" class="to-be-checked">
                        <p>${item.description}</p>
                        <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg class="remove-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#CFCDD2;" d="M338.824,135.529H173.176V82.824C173.176,37.155,210.331,0,256,0s82.824,37.155,82.824,82.824
V135.529z M218.353,90.353h75.294v-7.529c0-20.759-16.888-37.647-37.647-37.647s-37.647,16.888-37.647,37.647V90.353z"/>
<path style="fill:#AEADB3;" d="M256,0v45.176c20.759,0,37.647,16.888,37.647,37.647v7.529H256v45.176h82.824V82.824
C338.824,37.155,301.669,0,256,0z"/>
<polygon style="fill:#CFCDD2;" points="451.765,165.647 60.235,165.647 90.353,512 421.647,512 "/>
<polygon style="fill:#AEADB3;" points="256,165.647 256,512 421.647,512 451.765,165.647 "/>
<path style="fill:#DFDFE1;" d="M391.529,90.353H120.471c-49.9,0-90.353,40.453-90.353,90.353l0,0h451.765l0,0
C481.882,130.805,441.43,90.353,391.529,90.353z"/>
<rect x="233.412" y="248.471" style="fill:#88888F;" width="45.176" height="195.765"/>
<rect x="143.059" y="248.471" style="fill:#AEADB3;" width="45.176" height="195.765"/>
<rect x="323.765" y="248.471" style="fill:#88888F;" width="45.176" height="195.765"/>
<path style="fill:#CFCDD2;" d="M391.529,90.353H256v90.353h225.882l0,0C481.882,130.805,441.43,90.353,391.529,90.353z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                    </div>
                    <hr>
                </div>
  `;
});
