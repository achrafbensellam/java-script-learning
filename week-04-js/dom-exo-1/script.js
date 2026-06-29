let title = document.querySelector('h1');

title.textContent="MolenGeek Students";

let para = document.querySelectorAll('p');

para[0].textContent = 'Ahmed Full Stack Developer';
para[1].textContent = 'Sara UI/UX Designer';
para[2].textContent = 'AYassine React Developer';
console.log(para[0].textContent +' '+ para[1].textContent +' '+ para[2].textContent);
