// *======================== start besmillah ======================* // 
// let anoyingsection = document.querySelector('.chef');
// anoyingsection.style.display = 'flex';
// anoyingsection.style.padding ='0% 6%';
// anoyingsection.style.gap ='5%';
// anoyingsection.style.margin ='4% 0%';
let bergur = document.querySelector('.burger');
let menu = document.querySelector('.header-burger-menu1');
menu.addEventListener('click',()=>{ 
    bergur.classList.toggle('burger');
})
// !=================================
function btnsHitsCart() {
    let notreCart = document.getElementById('notreCart');
let laCartDesEnvies = document.getElementById('laCartDesEnvies');

notreCart.addEventListener('click',(e)=>{
e.preventDefault()
    laCartDesEnvies.scrollIntoView({behavior:"smooth"})
})
let choisisPizzaBTN = document.getElementById('choisisPizzaBTN');
choisisPizzaBTN.addEventListener('click',()=>{
     laCartDesEnvies.scrollIntoView({behavior:"smooth"})
})
let myCartDiv1BTN = document.getElementById('myCart-div1BTN');
let myCart = document.querySelector('.myCart1')

myCartDiv1BTN.addEventListener('click',()=>{
    laCartDesEnvies.scrollIntoView({behavior:"smooth"})
    myCart.style.display = 'none'
});
let headerNavBarBTN = document.getElementById('header-navBarBTN');
headerNavBarBTN.addEventListener('click',()=>{
    myCart.style.display = 'block'

})
let exitBTN = document.getElementById('exitBTN')
exitBTN.addEventListener('click',()=>{
    myCart.style.display = 'none'
    console.log(myCart);
    
})
}
btnsHitsCart();
// !==================================
