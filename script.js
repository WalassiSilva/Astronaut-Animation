const helmet = document.querySelector('.helmet');
const star = document.querySelector('.s6');
const message = document.querySelector('.message');
const secret = document.querySelector('.secret');
const btn = document.querySelector('.btn');
const blackout = document.querySelector('.blackout');

helmet.addEventListener('click', () => {
  message.style.display = 'block';  
});
star.addEventListener('click', () => {
  secret.style.display = 'block';  
  console.log('secret');
  setTimeout(() => {
    secret.style.display = 'none';
  }, 1000);  
});

btn.addEventListener('click', () => {
  blackout.style.display = 'none';
});
