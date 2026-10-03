// *======================== start besmillah ======================*
//  ! part 1 :
// 1=========== 
let productName = 'mercedes';
let price = 500000;
let quantity = 50;
let isAvailable = true;
let total = price * quantity;
console.log(`${quantity} x ${productName} = ${total}`);
// 2 ==========
if (isAvailable === true && quantity > 0) {
    console.log('Product can be ordered');

} else {
    console.log('Product unavailable');
}
// 3 ==========
let temperature = 26;
if (temperature > 30) {
    console.log('hot');

} else if (temperature >= 20 && temperature <= 30) {
    console.log('normal');
} else {
    console.log('cold');
}
// ! part 2 :
// 4 ==========
const technologies = ["HTML", "CSS", "JavaScript", "Git"];
technologies.push('react');
technologies.unshift('bash');
technologies.splice(4, 1)
console.log(technologies.includes('JavaScript'));
console.log(technologies.length);

console.log(technologies);
// ! part 3 :
const values = [120, 50, 300, 75, 200];
let val
let howmany = 0
for (let i = 0; i < values.length; i++) {
    val = values[i]
    if (val > 100) {
        console.log(val);
        howmany++
    }

}
console.log(howmany);

const names = ["Ahmed", "Sara", "Omar", "Youssef"];
let noms
for (let i = 0; i < names.length; i++) {
    noms = names[i];
    if (noms.includes('a')) {
        console.log(noms);

    }

}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);

    };

}
// ! part 4 :
function calculatePrice(price, quantity) {
    let total = price * quantity;
    return total;
}
let TOTAL = calculatePrice(price, quantity);
console.log(TOTAL);
let discount = price * 0.20;
function applyDiscount(price, discount) {
    let totaldiscount = price - discount;
    return totaldiscount

}
let totaldisc = applyDiscount(price, discount)
console.log(totaldisc);
let age = 18;
function isAdult(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
let checkage = isAdult(age);
console.log(checkage);

let word1 = 'achrafbensellam';
let word2 = 'molengeekAlhoceima';
function getLongerWord(word1, word2) {
    if (word1.length > word2.length) {
        return word1
    } else {
        return word2
    }
}
let LongerWord = getLongerWord(word1, word2);
console.log(LongerWord);

// ! part 5 :
let product = {
    name: 'sumsung',
    price: 2000,
    category: 'phone',
    stock: 20,
};
function receive(product) {
    if (product.price === 0) {
        product.isAvailable = false
    } else {
        product.isAvailable = true

    }
    console.log(`${product.name} - ${product.category} - ${product.price}MAD - ${product.isAvailable}`);


}
receive(product);
// ! part 6:
let arryOFobjects = [
    {
        name: 'laptop',
        price: 7000,
        categor: 'electronics'
    },
    {
        name: 'mouse',
        price: 150,
        categor: 'electronics'
    },
    {
        name: 'laptop',
        price: 900,
        categor: 'furniture'
    },
    {
        name: 'laptop',
        price: 1500,
        categor: 'furniture'
    }
];
let displayelectro = arryOFobjects.filter((e)=> e.categor === 'electronics');
console.log(displayelectro);
let moreCOST = arryOFobjects.filter((e)=> e.price > 1000);
console.log(moreCOST);
let totalproducts = 0;
for (let i = 0; i < arryOFobjects.length; i++) {
    totalproducts += arryOFobjects[i].price;

}
console.log(totalproducts);

let findcheapestproduct = arryOFobjects[0].price;
for (let i = 0; i < arryOFobjects.length; i++) {
    if (findcheapestproduct > arryOFobjects[i].price) {
        findcheapestproduct = arryOFobjects[i].price
    }

}
console.log(findcheapestproduct);

// !!!!!!!==================
// 25 skiped ==============
let samecategory = 0
let samecategory2 = 0
for (let i = 0; i < arryOFobjects.length; i++) {
    if(arryOFobjects[i].categor === 'electronics'){
        samecategory ++ ;
    }else{
        samecategory2 ++ ;
    }
}
console.log(`electronics : ${samecategory}`);
console.log(`furniture : ${samecategory2}`);

// !!!!!!!==================
// ! part 7 :
const username = "  zakaria_dev  ";
console.log(username.trim());
console.log(username.toLocaleUpperCase().trim());
let check = username.includes('dev');
console.log(check);
let replce = username.trim().replace('dev','developer')

console.log(replce);
console.log(replce.length);
// ! part 8 :
//===========================================
// DOM part ==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//===========================================
let form = document.getElementById('form');
let nameProduct = document.getElementById('nameProduct');
let Price = document.getElementById('price');
let Quantity = document.getElementById('quantity');
let displayProduct = document.getElementById('displayProduct');
let productDataArray = [] ;
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if (validationInputs()) {
        getdata();
        displayProducts(productDataArray);
    }

    console.log(productDataArray);

})
function validationInputs(){
    if (nameProduct.value === '') {
        alert('name can not be empty');
    }else if (Price.value === '' && Quantity.value === ''){
        alert('fill all the fields')
    }else if(Price.value <= 0 && Quantity.value <= 0){
        alert('price & quantity can not be null')
    }else{
        return true
    }
}
function getdata() {
    let productObject = {
        name: nameProduct.value,
        price : Price.value,
        quantity :Quantity.value
    }
    productDataArray.push(productObject);
}
function displayProducts(productDataArray){
    let products = productDataArray[productDataArray.length -1];
    let productCard = document.createElement('div');
    displayProduct.appendChild(productCard);
    let calcproducts = products.quantity * products.price;
    // productCard.innerHTML = `
    // <p>name : ${products.name}</p>
    // <p>price : ${products.price}</p>
    // <p>Quantity : ${products.quantity}</p>   
    // <P>${products.name}- ${products.quantity} x ${products.price} = ${calcproducts} </p>
    // `;
    let nameproduct = document.createElement('p');
    let pricepro = document.createElement('p');
    let quantitypro = document.createElement('p');
    let displaypro = document.createElement('p');
    productCard.appendChild(nameproduct);
    productCard.appendChild(pricepro);
    productCard.appendChild(quantitypro);
    productCard.appendChild(displaypro);
    nameproduct.textContent = `name : ${products.name}`;
    pricepro.textContent = `price : ${products.price}`;
    quantitypro.textContent = `Quantity : ${products.quantity}`;
    displaypro.textContent = `${products.name}- ${products.quantity} x ${products.price} = ${calcproducts}`

    let IncreaseQuantity = document.createElement('button');
    productCard.appendChild(IncreaseQuantity);
    IncreaseQuantity.textContent = 'Increase Quantity';
    if (calcproducts > 500) {
        productCard.classList.add('high-price');
    };
    IncreaseQuantity.addEventListener('click',()=>{
        products.quantity = +products.quantity + 1;
    quantitypro.textContent = `Quantity : ${products.quantity}`;
        console.log(products.quantity);
        console.log(productDataArray);       
    });

}
// ! part 9:
let typinginput = document.getElementById('typinginput');
let typingInputValue =document.getElementById('typingInputValue');
typinginput.addEventListener('input',()=>{
    typingInputValue.textContent = typinginput.value;
    if (typinginput.value.length > 10) {
        typingInputValue.classList.add('long-text');
    }else{
        typingInputValue.classList.remove('long-text');
    }

});
let showbtn =document.getElementById('showbtn');
let hidebtn = document.getElementById('hidebtn');
showbtn.addEventListener('click',()=>{
    typingInputValue.style.display= 'block';
});
hidebtn.addEventListener('click',()=>{
    typingInputValue.style.display= 'none';

});
// ! part 10  ;
const products = [
    { name: "Laptop", price: 7000, stock: 3 },
    { name: "Mouse", price: 150, stock: 0 },
    { name: "Keyboard", price: 400, stock: 5 },
    { name: "Screen", price: 2500, stock: 2 }
];
let onlyAvailabl = products.filter((e)=> e.stock !== 0);
console.log(onlyAvailabl);
function eachProductTotal(){
    let total2=0;
    for (let i = 0; i < products.length; i++) {
        let total = +products[i].price * +products[i].stock
        total2 += total ;
        console.log(total);
    }
    console.log(total2);
}
eachProductTotal();
let biggeststock = products[0].stock;
for (let i = 0; i < products.length; i++) {
    if (biggeststock < products[i].stock) {
        biggeststock = products[i].stock
    }
}
console.log(biggeststock);

function searchProduct(product){
  let findproduct = products.find((e)=> e.name === product);

  if (findproduct) {
    console.log(`${findproduct.name} found - ${findproduct.price} MAD`);

  }else{
    console.log(' Product not found');

  }

}
searchProduct('Mouse')

