// * ====================== start besmillah==============================
let title = document.querySelector('h1');
title.textContent= 'MolenGeek Dashboard';
let list = document.querySelectorAll('li');
let lists = list.forEach(Element=>console.log(Element.textContent));
let off = document.querySelector('.status')
off.innerHTML='Online';
let btn = document.querySelector('button');
let inp = document.querySelector('input')
let unknown = document.querySelector('h2')
btn.addEventListener('click',()=>{
    // console.log(btn.textContent);
    // inp.value= 'Ahmed'
    // let vlaUe= document.querySelector('input')
   let vlaUe =  inp.value;
    unknown.textContent=inp.value.toUpperCase();
    let lis = list.forEach(Element=>Element.textContent = Element.textContent.toUpperCase());
    // lis = list[2].textContent.toUpperCase() ;
    if (inp.value === '') {
        console.log('enter your name please');
    }else{
        console.log('3amera');
        
    }
})
let clas = document.querySelector('.card');
clas.classList.add('active')
// console.log(clas);
clas.style.backgroundColor='orange'
clas.style.color='rgb(0,0,255)'
clas.style.padding='1%'
clas.style.borderRadius='15px'
clas.style.textAlign="center"

