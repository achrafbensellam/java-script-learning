let title = document.querySelector('h1');
title.textContent = "Welcome to MolenGeek";
let para = document.getElementsByClassName("description");
para[0].innerHTML = " <p> Building interactive web pages </p>";
let inpuT = document.querySelector('input');
let aaa = inpuT.textContent
console.log(aaa);
let btn = document.querySelector('button');
btn.addEventListener('click' ,()=>{
    btn.textContent= 'Button clicked'
    console.log(btn.textContent);
    
});
let carD = document.querySelector('.card')
carD.textContent = 'Future Developer';
carD.classList.add('active')
console.log(carD);
carD.style.backgroundColor="lightgreen"
