import './style.css';

class ToDoItem {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const item1 = new ToDoItem('Learn Apache', false, 0);
const item2 = new ToDoItem('Learn Linux', false, 1);
const item3 = new ToDoItem('Learn React-Redux', false, 2);
const item4 = new ToDoItem('Learn HTML', false, 3);
const item5 = new ToDoItem('Learn CSS', false, 4);

const todoList = [item1, item2, item3, item4, item5];
const botContainer = document.querySelector('.bot-container');

todoList.forEach((item) => {
  botContainer.innerHTML += `
                <div class="todo-card">
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
