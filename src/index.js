import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const clicked = document.querySelector('.clicked');

  clicked.addEventListener('click', () => {
    alert('You clicked me!');
  });
});

console.log('Hello Webpack');