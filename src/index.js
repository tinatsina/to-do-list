import './style.css';

const botContainer = document.querySelector('.bot-container');

botContainer.innerHTML = `
                 <div class="todo-card">
                    <div class="card-items">
                        <input type="checkbox">
                        <p>Important stuff</p>
                        <h3>X</h3>
                    </div>
                </div>
`;