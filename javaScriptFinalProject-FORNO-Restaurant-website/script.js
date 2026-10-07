// *======================== start besmillah ======================* // 
// let anoyingsection = document.querySelector('.chef');
// anoyingsection.style.display = 'flex';
// anoyingsection.style.padding ='0% 6%';
// anoyingsection.style.gap ='5%';
// anoyingsection.style.margin ='4% 0%';
let bergur = document.querySelector('.burger');
let menu = document.querySelector('.header-burger-menu1');
menu.addEventListener('click', () => {
    bergur.classList.toggle('burger');
})
// !=================================
function btnsHitsCart() {
    let notreCart = document.getElementById('notreCart');
    let laCartDesEnvies = document.getElementById('laCartDesEnvies');

    notreCart.addEventListener('click', (e) => {
        e.preventDefault()
        laCartDesEnvies.scrollIntoView({ behavior: "smooth" })
    })
    let choisisPizzaBTN = document.getElementById('choisisPizzaBTN');
    choisisPizzaBTN.addEventListener('click', () => {
        laCartDesEnvies.scrollIntoView({ behavior: "smooth" })
    })
    let myCartDiv1BTN = document.getElementById('myCart-div1BTN');
    let myCart = document.querySelector('.myCart1')

    myCartDiv1BTN.addEventListener('click', () => {
        laCartDesEnvies.scrollIntoView({ behavior: "smooth" })
        myCart.style.display = 'none'
    });
    let headerNavBarBTN = document.getElementById('header-navBarBTN');
    headerNavBarBTN.addEventListener('click', () => {
        myCart.style.display = 'block'

    })
    let exitBTN = document.getElementById('exitBTN')
    exitBTN.addEventListener('click', () => {
        myCart.style.display = 'none'
        console.log(myCart);

    })
}
btnsHitsCart();
// !==================================
let PizzfoodArray = [];
class Pizza {
    // #id
    #price;
    #stock
    constructor(name, price, category, stock, id) {
        this.name = name;
        this.#price = price;
        this.category = category;
        this.#stock = stock;
        this.id = id;
    }
    addItem() { };
    removeItem() { };
    changeQuantity() { };
    getTotal() {

    };
}
class CLASSIQUES extends Pizza { };
let Margherita = new CLASSIQUES('margherita', 49, 'classique', 10, 1);
let QuattroFormaggi = new CLASSIQUES('quattro formaggi', 85, 'classique', 10, 2);
class EPICEES extends Pizza { };
let Diavola = new EPICEES('diavola', 69, 'epiciees', 5, 3);
class SIGNATURES extends Pizza { };
let Pollo = new SIGNATURES('pollo', 79, 'signatures', 7, 4);
let Tonno = new SIGNATURES('tonno', 75, 'signatures', 3, 5);
class VÉGÉTARIENNES extends Pizza { };
let Giardino = new VÉGÉTARIENNES('giardino', 65, 'vegetariennes', 15, 6);
PizzfoodArray.push(Margherita, QuattroFormaggi, Diavola, Pollo, Tonno, Giardino);
console.log(PizzfoodArray);
//! ===============search pizza by name
let searchInput = document.getElementById('searchInput');
// let margheritaCard = document.getElementById('1');
// let diavolaCard = document.getElementById('2');
// let polloCard = document.getElementById('3');
// let giardinoCard = document.getElementById('4');
// let tonnoCard = document.getElementById('5');
// let QuattroFormaggiCard = document.getElementById('6');
// diavolaCard.style.display ='none'
let cards = document.querySelectorAll('.Margherita-card');
function SearchByName() {
    searchInput.addEventListener('input',()=>{
        let search = searchInput.value.trim().toLowerCase();
        cards.forEach((element)=>{
           let pizzaName = element.querySelector('.Margherita-card-info-para2');
           let pizzaNom = pizzaName.textContent.toLowerCase()
            if ( pizzaNom.includes(search)) {
                element.style.display = 'block';
                   
            }else{
                element.style.display = 'none';
                
            }
        })
    })
}
SearchByName()
// console.log(selectCtegory);

function SearchByCtegory() {
    let selectCtegory = document.getElementById('selectCtegory');
    selectCtegory.addEventListener('change',()=>{
        cards.forEach((element)=>{
        
            let category = element.querySelector('.Margherita-card-info-para1');
        console.log(category);
        
        if (selectCtegory.value.trim() === category.textContent.trim() || selectCtegory.value.trim() === '') {  
            element.style.display = 'block'
            console.log(selectCtegory.value);
            
            
            console.log(category.textContent.trim());
        }else {
            element.style.display = 'none'
            
        }
    })
    })
}
SearchByCtegory()