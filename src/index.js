import './style.css';
import ToDoList from './common/ToDoList.js';

const todoList = new ToDoList();

todoList.addItem('Buy milk');
todoList.addItem('Buy eggs');
todoList.addItem('Buy bread');
todoList.addItem('Buy cheese');
// --------------------------------------------------------------------------------------
localStorage.clear();
localStorage.setItem('books', JSON.stringify(todoList.getItems()));
const books = JSON.parse(localStorage.getItem('books'));
console.log(books);
// --------------------------------------------------------------------------------------
const botContainer = document.querySelector('.bot-container');

todoList.getItems().forEach((item) => {
  botContainer.innerHTML += `
                <div class="todo-card" id="${item.id}">
                    <div class="card-items">
                        <input type="checkbox">
                        <p>${item.description}</p>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" id="three-dots" xmlns="http://www.w3.org/2000/svg">
                          <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)">
                            <rect id="Rectangle" width="24" height="24" fill="none"/>
                            <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
                            <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
                            <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="#000" stroke-miterlimit="10" stroke-width="0.5"/>
                          </g>
                        </svg>

                    </div>
                    <hr>
                </div>
  `;
});
