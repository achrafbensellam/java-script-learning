// *======================== start besmillah ======================* // 
let anoyingsection = document.querySelector('.chef');
anoyingsection.style.display = 'flex';
anoyingsection.style.padding ='0% 6%';
anoyingsection.style.gap ='5%';
anoyingsection.style.margin ='4% 0%';
let bergur = document.querySelector('.burger');
let menu = document.querySelector('.header-burger-menu1');
menu.addEventListener('click',()=>{ 
    bergur.classList.toggle('burger');
})
