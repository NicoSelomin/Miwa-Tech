const loader = document.querySelector('.loader');
const header = document.querySelector('header');
const main = document.querySelector('main');

window.addEventListener('load', () => {
  loader.classList.add('fondu-out');
  header.style.display = 'block';
  main.style.display = 'block';
});