const loader = document.querySelector('.loader');
const header = document.querySelector('header');
const main = document.querySelector('main');
const btn = document.querySelector('.montante');


window.addEventListener('load', () => {
  loader.classList.add('fondu-out');
  header.style.display = 'block';
  main.style.display = 'block';
  btn.style.display = 'flex';
});
 btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
 });