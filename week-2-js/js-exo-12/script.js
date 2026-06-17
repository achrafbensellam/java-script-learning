// ==========================================================================================
// exercise 1
// ==========================================================================================
// alert("Welcome Zakaria");
// alert("Welcome Sara");
// alert("Welcome Yassine");
 function welcomeStudent(user) {
    return' Welcome student';
   
}
console.log(welcomeStudent());
console.log(welcomeStudent());
console.log(welcomeStudent());
for (let i = 1; i <= 3 ; i++) {
    console.log( welcomeStudent());

    ;
    }
// ==========================================================================================
// exercise 2
// ==========================================================================================
function sayHello(firstName) {
    console.log('hello '+ firstName);
    
}
sayHello("Zakaria");
sayHello("Sara");
sayHello("Yassine");
// ==========================================================================================
// exercise 3
// ==========================================================================================

function showSquare(number) {
    console.log(Math.pow(number,2));
    // return Math.pow(number,2)
}
showSquare(5);
showSquare(10);
showSquare(7);
showSquare(3);
// console.log(showSquare(3));
// console.log(showSquare(5));

// ==========================================================================================
// exercise 4
// ==========================================================================================

let students = ['achraf', 'ahmed','walid','warda','widad']
function displayStudents (studens) {
    return studens.forEach(studens => {console.log(studens);});
}

displayStudents(students);
// ==========================================================================================
// exercise 5
// ==========================================================================================

// 3️⃣ Pass the object as a parameter.

// 4️⃣ Display:

// Name:
// Age:
// Country
let student = {
     firstName:'wassim',
 age:23,
country:'morocco'
}
let talaba = {
     firstName:'hamid',
 age:23,
country:'morocco'
}
function displayStudent(object) {
    console.log( object.firstName,object.age,object.country);
    console.log( object.age);
    console.log( object.country);
    
}
displayStudent(student)
displayStudent(talaba)
// ==========================================================================================
// exercise 6
// ==========================================================================================
function addNumbers(number1,number2) {
    return number1+ number2;
}
let result = addNumbers(1,2)
console.log(result);
// ==========================================================================================
// exercise 6
// ==========================================================================================

function isAdult(age) {
    if (age>= 18) {
        console.log('adult');
     
    }else{
        console.log('minor');
        
    }
}
isAdult(20)
isAdult(10)
isAdult(12)

let numero= [ 1,2,3,4,15,14,232,677,424];
function getBigNumbers(arrr) {
   return console.log(arrr.filter(n=> n>10));
}
getBigNumbers(numero)