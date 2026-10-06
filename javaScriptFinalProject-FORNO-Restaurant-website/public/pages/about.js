function btnsHitsCart() {
//     let notreCart = document.getElementById('notreCart');
// let laCartDesEnvies = document.getElementById('laCartDesEnvies');

// notreCart.addEventListener('click',(e)=>{
// e.preventDefault()
//     laCartDesEnvies.scrollIntoView({behavior:"smooth"})
// })
// let choisisPizzaBTN = document.getElementById('choisisPizzaBTN');
// choisisPizzaBTN.addEventListener('click',()=>{
//      laCartDesEnvies.scrollIntoView({behavior:"smooth"})
// })
let myCartDiv1BTN = document.getElementById('myCart-div1BTN');
let myCart = document.querySelector('.myCart1')

myCartDiv1BTN.addEventListener('click',()=>{
    laCartDesEnvies.scrollIntoView({behavior:"smooth"})
    myCart.style.display = 'none'
});
let headerNavBarBTN1 = document.getElementById('header-navBarBTN');
headerNavBarBTN1.addEventListener('click',()=>{
    myCart.style.display = 'block'

})
let exitBTN = document.getElementById('exitBTN')
exitBTN.addEventListener('click',()=>{
    myCart.style.display = 'none'
    console.log(myCart);
    
})
}
btnsHitsCart();