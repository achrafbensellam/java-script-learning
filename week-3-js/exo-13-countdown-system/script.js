// *=====================================start besmillah=======================================
for (let index = 10; index >= 0; index--) {
    let element = index;
    console.log(index);
    if (index === 0){
 console.log('boom');
    }
       if (index % 2 === 0) {
    console.log("The number is even.");
}
    if ((index & 1) === 0) {
    // console.log("The number is even.");
}
}
// ! =============================2
let students = [
   "Ahmed",
   "Sara",
   "Yassine",
   "Imane",
   "Omar"
];
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);
    if (element.includes("Imane")) {
        console.log('student found');
        
    } else{
        console.log('student not found');
        
    }
}
let count = 0
for (let i = 0; i < students.length; i++) {
        let element = students[i];
        if( students.find(element=> element.charAt(i) === "a")){
        console.log(element);
    }
    
    if (element.includes('a')) {
        count ++;
        console.log(count);
        
    }
    }

// !================================= 3
let balance = 1000;
while (balance > 0 ) {
    balance-= 100;
    console.log(balance );
    if (balance<= 300 && balance != 0) {
        console.log("WARNING LOW BALANCE");
        
    }
    if (balance === 0) {
        console.log("Insufficient funds");
        
    }
    
}
// !====================================== 4
const password = "1234";
let num = 0 
let Attempts = 3
let user=prompt(`enter passs Attempts \
    left:${Attempts}`)
while (num < 2) {
    
    if (password != user) {
        Attempts-=1;
        prompt(`try again \
            Attempts left: ${ Attempts} `);
                console.log("Wrong password");
                if (num === 1) {
                    console.log("Account blocked");
                    
                }
            }
            else{
                console.log("Access granted");
                break
                
            }
           
        num += 1;
    
} 
// let count = 0;
// for (let index = 0; index < students.length; index++) {
//     let  element = students[index];
//       if (element.includes("a")) {

//         count++;

//       }
// }
// console.log(count);