function btnsHitsCart() {
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