// ======================================================================================
// exercice 1
// ======================================================================================
let a = 20;
let b = '20';
console.log(a == b);
console.log(a === b);
if (a > b) {
    console.log("sahih");

} else {
    console.log('khata2');

}
if (a < b) {
    console.log('sah');
} else {
    console.log('ghalat');

}
if (a >= b) {
    console.log('sah');

} else {
    console.log('ghalat');
}

if (a <= b) {
    console.log('sah');

} else {
    console.log('ghalat');
}
//=====================================================================================
// exercice 2
//===================================================================================== 
let string = "achraf";
let number = 23;
let boolean = true;
let array = ['A', 'B', 'C', 'D'];
let object = { hello: 'salam', ola: 'bonjoure' };
let nothing = null;
let unknown;
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof object);
console.log(typeof nothing);
console.log(typeof unknown);
// ======================================================================================
// exercice 3
// ======================================================================================
let student = {
    nom: 'achraf bensellam', age: 23, country: 'morocco', skills: [HTML=" very good", CSS = "good", JS ="expert"]
}
console.log('student name : ' + "" + student.nom);
console.log('country : ' + "" + student.country);
console.log(' level : ' + "" + student.skills[2]);

// ======================================================================================
// exercice 4
// ======================================================================================
let students = [
    'achraf', 'walid', 'ahmed', 'warda', 'smair', 'mohammed'];
console.log(students[0]);
console.log(students[5]);
// ======================================================================================
// exercice 5
// ======================================================================================
let naMe = "achraf";
let age = 23;
let phone = '0597732693';
let city = 'alhoceima'
console.log(`${naMe} is ${age} years old, lives in ${city} and has the phone number ${phone}
`);
// ======================================================================================
// bonus
// ======================================================================================
// let favGame = prompt("what is your favourite game ?")
// if (favGame !== "") {
// console.log('my favourite game is' + favGame);


// }
// let favfood = prompt('what is your favourite food ?')
// if (favfood !== "") {
//     console.log('my favourite food is' + favfood);
    
// }
// let favBrand = prompt('what is your favourite brand')
// if (favBrand !== '') {
//     console.log('my favourite food is' + favBrand);
    
// }


let favGame = prompt("what is your favourite game ?")
let favfood = prompt('what is your favourite food ?')
let favBrand = prompt('what is your favourite brand ?')
if (favGame !== "" && favfood !== '' && favBrand !== '') {
console.log('my favourite game is ' + favGame + " favourite food is " + favfood + " and my favourite brand is "+ favBrand + "" )
console.log(`my favourite game is ${favGame}   favourite food is ${ favfood } and my favourite brand is ${favBrand} `)
}else{
    console.log('fill up the form quistion');
    
}