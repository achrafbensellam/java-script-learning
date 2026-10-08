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

    });
    let ajouter = document.querySelector('.chossedPizzaUnder-DIV-para5');
    ajouter.addEventListener('click', () => {
        myCart.style.display = 'none'

    })
}
btnsHitsCart();
// !==================================
let PizzfoodArray = [];
class Pizza {
    #id;
    #price;
    #Qantity;
    #pic
    constructor(name, price, category, Qantity, id, pic) {
        this.name = name;
        this.#price = price;
        this.category = category;
        this.#Qantity = Qantity;
        this.#id = id;
        this.#pic = pic
    }
    get getID() {
        return this.#id
    }
    get getpicture() {
        return this.#pic
    }
    get getPrice() {
        return this.#price
    }
    set setPrice(value) {
        return this.#price = value
    }
    get getQantity() {
        return this.#Qantity
    }
    set setQantity(value) {
        return this.#Qantity = value;
    }
    calcul() {
        return this.#price + this.#Qantity
    }
    addItem() { };
    removeItem() { };
    changeQuantity() { };
    getTotal() {

    };
}
class CLASSIQUES extends Pizza { 
};
let Margherita = new CLASSIQUES('margherita', 49, 'classique', 10, 1, 'margherita.png');
let QuattroFormaggi = new CLASSIQUES('quattro formaggi', 85, 'classique', 10, 6, 'quattro-formaggi.png');
class EPICEES extends Pizza { };
let Diavola = new EPICEES('diavola', 69, 'epiciees', 5, 2, 'diavola.png');
class SIGNATURES extends Pizza { };
let Pollo = new SIGNATURES('pollo', 79, 'signatures', 7, 3, 'pollo.png');
let Tonno = new SIGNATURES('tonno', 75, 'signatures', 3, 5, 'tonno.png');
class VÉGÉTARIENNES extends Pizza { };
let Giardino = new VÉGÉTARIENNES('giardino', 65, 'vegetariennes', 15, 4, 'giardino.png');
PizzfoodArray.push(Margherita, QuattroFormaggi, Diavola, Pollo, Tonno, Giardino);
console.log(PizzfoodArray);
//! ===============search pizza by name
let searchInput = document.getElementById('searchInput');
let cards = document.querySelectorAll('.Margherita-card');
function SearchByName() {
    searchInput.addEventListener('input', () => {
        let search = searchInput.value.trim().toLowerCase();
        cards.forEach((element) => {
            let pizzaName = element.querySelector('.Margherita-card-info-para2');
            let pizzaNom = pizzaName.textContent.toLowerCase()
            if (pizzaNom.includes(search)) {
                element.style.display = 'block';

            } else {
                element.style.display = 'none';

            }
        })
    })
}
SearchByName()
// console.log(selectCtegory);

function SearchByCtegory() {
    let selectCtegory = document.getElementById('selectCtegory');
    selectCtegory.addEventListener('change', () => {
        cards.forEach((element) => {

            let category = element.querySelector('.Margherita-card-info-para1');
            console.log(category);

            if (selectCtegory.value.trim() === category.textContent.trim() || selectCtegory.value.trim() === '') {
                element.style.display = 'block'
                console.log(selectCtegory.value);


                console.log(category.textContent.trim());
            } else {
                element.style.display = 'none'

            }
        })
    })
}
SearchByCtegory();
// !=====================================================================
let AddPizzaToBye = document.querySelectorAll('.Margherita-card-info-btn');
let count = 0;
AddPizzaToBye.forEach((element) => {
    let styleDuration;
    
    element.addEventListener('click', () => {
        element.classList.add('greenBTN')
        clearTimeout(styleDuration);
        styleDuration = setTimeout(() => {
            element.classList.remove('greenBTN')
            element.style.transition = '3s ease'
            
        }, 1500);
        let addedPizza = document.getElementById('addedPizza');
        addedPizza.style.display = 'block'
        let gettingID = element.getAttribute('id');
        console.log(gettingID);
        // let totalall = 0
        
        for (let i = 0; i < PizzfoodArray.length; i++) {
            let pizza = PizzfoodArray[i];
            
            let chooseQantityPizza = document.createElement('div');
            let chossedPizzaUnderDiv = document.getElementById('chossedPizzaUnderDiv');
            // chossedPizzaUnderDiv.parentNode.insertBefore(chooseQantityPizza,chossedPizzaUnderDiv)
            if (+gettingID === pizza.getID) {
                let onlyoneCard = document.querySelector(`.id${PizzfoodArray[i].getID}`);
                if (onlyoneCard) {
                    
                    return;
                }
                pizza.setQantity = pizza.getQantity - 1
                pizzaQantity()

                // count++
            // hedercart.textContent = count
                console.log(PizzfoodArray);
                chooseQantityPizza.classList.add(`id${PizzfoodArray[i].getID}`);
                console.log(PizzfoodArray[i].getID + 'dsad');

                addedPizza.appendChild(chooseQantityPizza);
                chooseQantityPizza.innerHTML = `
       <div class= "fother-div">
       <div class = 'fother-div2'>
               <div  class= "fother-div-pic">
               <img   class= "fother-div-picture" src="/public/images/${pizza.getpicture}" alt="">
               </div>
         <div  class= "fother-div-para1">
           <p   class= "fother-div-para2">${pizza.name}</p>
           <p   class= "fother-div-para3">${pizza.getPrice}MAD/PIZZA</p>
              <div class = 'fother-div-para10'>
              <p   class= "fother-div-para4">-</p>
              <p   class= "fother-div-para5">1</p>
              <p  class= "fother-div-para6">+</p>
              </div>
         </div>
        </div>
      
       <div  class= "fother-div-para7">
       <p  class= "fother-div-para8">${pizza.getPrice}MAD</p>
       <p><a  class= "fother-div-para9" href="">Supprimer</a></p>
       </div>
       </div>
       `
                let plusBTN = chooseQantityPizza.querySelector('.fother-div-para6');
                let minusBTN = chooseQantityPizza.querySelector('.fother-div-para4');
                let countdiv = chooseQantityPizza.querySelector('.fother-div-para5');
                let deletelink = chooseQantityPizza.querySelector('.fother-div-para9');
                BasketQantity(plusBTN, countdiv, pizza, minusBTN,deletelink, chooseQantityPizza, addedPizza,count);
                // let total = document.querySelector('.chossedPizzaUnder-DIV-para3');
                // totalall += pizza.getPrice
                // total.textContent = totalall
                
                addedPizza.insertBefore(
                    chooseQantityPizza,
                    chossedPizzaUnderDiv
                );
                // deleteCARD(deletelink, chooseQantityPizza, addedPizza)
            }
            
        }
        console.log(OrderArray);

    });

});
// let dd = document.querySelectorAll('.Margherita-card-info-btn')
// let anu = dd.getAttribute("id");
// console.log(PizzfoodArray.id);
// document.getAttribute('id')
// !===========================================
function pizzaQantity() {
    let AddPizzaTo = document.querySelectorAll('.ORI2');
    AddPizzaTo.forEach((element) => {
        let gettingID = element.getAttribute('id');
        for (let i = 0; i < PizzfoodArray.length; i++) {
            let pizza2 = PizzfoodArray[i]
            //    console.log(pizza2.id);
            if (+gettingID === pizza2.getID) {

                // let stockQantity = .querySelector('.stockQantity');
                if (pizza2.getQantity == 0) {
                    element.textContent = `out of stock : ${pizza2.getQantity}`
                    element.classList.add('ORI3');

                } else {
                    element.textContent = `en stock : ${pizza2.getQantity}`
                    element.classList.remove('ORI3');

                }
            }

        }

    })
}
pizzaQantity()
// !========================================================
let hedercart = document.getElementById('hedercart');
let totalall = 0;
let con = 0;
let totalredyOrder = document.querySelector('.totalredyOrder');
let totalredyOrder2 = document.querySelector('.spisefic');
function BasketQantity(plusBTN, countdiv, pizza, minusBTN,deletelink, chooseQantityPizza, addedPizza,count) {
    let total = document.querySelector('.chossedPizzaUnder-DIV-para3');
    totalall += pizza.getPrice
    total.textContent = `${totalall} MAD`

    let counter = 1;
    con++
            hedercart.textContent = con
    
    // let totalCounter = pizza.getPrice
    // let counterminus = pizza.getQantity;
    plusBTN.addEventListener('click', () => {
        console.log('asdsad');

        if (pizza.getQantity !== 0) {
            counter++
            countdiv.textContent = counter
            pizza.setQantity = pizza.getQantity - 1
            con++
            hedercart.textContent = con
            // console.log(pizzaqantity);
            pizzaQantity();
            // totalCounter+=pizza.getPrice
            // total.textContent = totalCounter
            // countdiv.classList.remove('fother-div-para55')
            totalall += pizza.getPrice
            total.textContent = `${totalall} MAD`

totalredyOrder.textContent = `${totalall} MAD`
    totalredyOrder2.textContent = `${totalall} MAD`
        } else {
            countdiv.classList.add('fother-div-para55')
            console.log(PizzfoodArray);

        }
console.log(OrderArray);

    })
    minusBTN.addEventListener('click', () => {
        console.log('dasewqefeefefe');
        countdiv.classList.remove('fother-div-para55')
        if (counter > 1) {
            counter--
            countdiv.textContent = counter
            pizza.setQantity = pizza.getQantity + 1
            con--
            hedercart.textContent = con

            totalall -= pizza.getPrice
            total.textContent = `${totalall} MAD`
            pizzaQantity();
            totalredyOrder.textContent = `${totalall} MAD`
    totalredyOrder2.textContent = `${totalall} MAD`
        }

    })
    // OrderArray.push(totalall)
    totalredyOrder.textContent = `${totalall} MAD`
    totalredyOrder2.textContent = `${totalall} MAD`
console.log(OrderArray);
deleteCARD(deletelink, chooseQantityPizza, addedPizza)
function deleteCARD(deletelink, chooseQantityPizza, addedPizza) {
deletelink.addEventListener('click', (e) => {
        e.preventDefault();
        // chooseQantityPizza.innerHTML = '';
            
        console.log(totalall);

        totalall -= counter*pizza.getPrice
        console.log(totalall);
        pizza.setQantity = pizza.getQantity+counter
        chooseQantityPizza.remove();
        pizzaQantity();
            total.textContent = `${totalall} MAD`
            if (totalall === 0) {
                    addedPizza.style.display='none'

            }
        con-=counter
                    hedercart.textContent = con
                    totalredyOrder.textContent = `${totalall} MAD`
    totalredyOrder2.textContent = `${totalall} MAD`

    })
}
}
let OrderArray = [];
console.log(OrderArray);
// !=================================================
let orderReadyBTN = document.querySelector('.chossedPizzaUnder-DIV-btn');
let getorderredy = document.querySelector('.orderForm');
let adedd = document.getElementById('addedPizza')
orderReadyBTN.addEventListener('click',()=>{
   getorderredy.style.display = 'block';
   adedd.style.display = 'none';
   let myCa = document.querySelector('.myCart-div1-para2');
   myCa.textContent = `Ma commande`;

});
let retour = document.querySelector('.orderForm-para1');
retour.addEventListener('click',(e)=>{
    e.preventDefault()
   getorderredy.style.display = 'none';
   adedd.style.display = 'block';
})

let bonAppetitPagePara13 = document.querySelector('.bonAppetitPagePara13');
bonAppetitPagePara13.addEventListener('click',()=>{
bonAppetit.style.display = 'none';

})
// !======================================================
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let getOrderrReadyInputName = document.getElementById('getOrderrReadyInputName');
let getOrderrReadyInputPhone = document.getElementById('getOrderrReadyInputNum');
let getOrderrReadyform = document.getElementById('getOrderrReadyform');
let errorForReady = document.getElementById('errorForReady');
let errorReadyDuration;
let recuperationWAY = document.getElementById('recuperationWAY');
let orderFormFrees = document.getElementById('frees');
getOrderrReadyform.addEventListener('submit',(e)=>{
    e.preventDefault();
   if ( verifiction()) {
       let status;
        let price;
        let totalaprice=0;

        if (radio1.checked) {
            status = radio1.value;
            price = 'gratuit';
            totalaprice = totalall
        } else if (radio2.checked) {
            status = radio2.value;
            price = 20;
            totalaprice =totalall+price
        }
       readyOrderArray.push({
           name:getOrderrReadyInputName.value.trim(),
           phone : getOrderrReadyInputPhone.value.trim(),
           status: status,
           price: price,
           totalPrice: totalaprice
        });
                recuperationWAY.textContent = status;
            //    readyOrderArray[readyOrderArray.length -1].price = price;
                orderFormFrees.textContent = price;
                if (totalall>0) {
                    let spisefic = document.querySelector('.spisefic');
                    spisefic.textContent = `${totalaprice} MAD`
                }

   }
   console.log(readyOrderArray);
   
});
let orderFormbtn = document.querySelector('.orderForm-btn');
let bonAppetit = document.querySelector('.bonAppetit');
orderFormbtn.addEventListener('click',()=>{
    if (verifiction()) {
bonAppetit.style.display = 'block';
   getorderredy.style.display = 'none';
   let myCa = document.querySelector('.myCart-div1-para2');
   myCa.textContent = `Bon appétit.`;
}
})
let readyOrderArray = [];
function verifiction() {
    const phoneRegex = /^(\+?\d{1,3}[ .\s]?)?\(?\d{3}\)?[ .\s]?\d{3}[ .\s]?\d{4}$/;
    if (getOrderrReadyInputName.value.trim() === '') {
        errorForReady.textContent = 'enter your name please';
        errorForReady.style.color = 'red';
        clearTimeout(errorReadyDuration);
        errorReadyDuration = setTimeout(() => {
        errorForReady.textContent = '';

        }, 1500);
        return

    }else if(getOrderrReadyInputPhone.value.trim() === ''){
        errorForReady.textContent = 'enter your phone number';
        errorForReady.style.color = 'red';
        clearTimeout(errorReadyDuration);
        errorReadyDuration = setTimeout(() => {
        errorForReady.textContent = '';

        }, 1500);
        return
    }else if(phoneRegex.test(getOrderrReadyInputPhone.value.trim()) === false){
        errorForReady.textContent = 'enter a valid phone number';
        errorForReady.style.color = 'red';
        clearTimeout(errorReadyDuration);
        errorReadyDuration = setTimeout(() => {
        errorForReady.textContent = '';

        }, 1500);
        return
    }else if(!getOrderrReadyInputPhone.value.trim().startsWith('06')){
        errorForReady.textContent = 'only moroccan phone number';
        errorForReady.style.color = 'red';
        clearTimeout(errorReadyDuration);
        errorReadyDuration = setTimeout(() => {
        errorForReady.textContent = '';

        }, 1500);
        return
    }else if(!radio1.checked && !radio2.checked){
        errorForReady.textContent = 'Comment récupérer vos pizzas';
        errorForReady.style.color = 'red';
        clearTimeout(errorReadyDuration);
        errorReadyDuration = setTimeout(() => {
        errorForReady.textContent = '';

        }, 1500);
        return
    }
    return true;
}
function displayinfo() {
    let bonAppetitPageParadisplay= document.querySelector('.bonAppetitPageParadisplay');
    for (let i = 0; i < PizzfoodArray.length; i++) {
        let order = PizzfoodArray[i];
        let newDIV = document.createElement('div');
        newDIV.classList.add('bonAppetitPagePara7');
        newDIV.innerHTML = `
        <p class="bonAppetitPagePara8">${order.getQantity} x ${order.name}</p>
        <p class="bonAppetitPagePara9">${order.getQantity*order.getPrice} MAD</p>
        `
        bonAppetitPageParadisplay.appendChild(newDIV);
    }
    console.log('qwewqe');
    
}