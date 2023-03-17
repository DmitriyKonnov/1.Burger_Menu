let btn = document.getElementById('burger');
let header = document.querySelector('.header');
btn.addEventListener('click', () => {
  header.classList.toggle('open');
});
