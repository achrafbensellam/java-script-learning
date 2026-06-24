// // // ======================================================================================
// // // exercice 1
// // // ======================================================================================
// // let a = 20;
// // let b = '20';
// // console.log(a == b);
// // console.log(a === b);
// // if (a > b) {
// //     console.log("sahih");

// // } else {
// //     console.log('khata2');

// // }
// // if (a < b) {
// //     console.log('sah');
// // } else {
// //     console.log('ghalat');

// // }
// // if (a >= b) {
// //     console.log('sah');

// // } else {
// //     console.log('ghalat');
// // }

// // if (a <= b) {
// //     console.log('sah');

// // } else {
// //     console.log('ghalat');
// // }
// // //=====================================================================================
// // // exercice 2
// // //===================================================================================== 
// // let string = "achraf";
// // let number = 23;
// // let boolean = true;
// // let array = ['A', 'B', 'C', 'D'];
// // let object = { hello: 'salam', ola: 'bonjoure' };
// // let nothing = null;
// // let unknown;
// // console.log(typeof string);
// // console.log(typeof number);
// // console.log(typeof boolean);
// // console.log(typeof array);
// // console.log(typeof object);
// // console.log(typeof nothing);
// // console.log(typeof unknown);
// // // ======================================================================================
// // // exercice 3
// // // ======================================================================================
// // let student = {
// //     nom: 'achraf bensellam', age: 23, country: 'morocco', skills: [HTML=" very good", CSS = "good", JS ="expert"]
// // }
// // console.log('student name : ' + "" + student.nom);
// // console.log('country : ' + "" + student.country);
// // console.log(' level : ' + "" + student.skills[2]);

// // // ======================================================================================
// // // exercice 4
// // // ======================================================================================
// // let students = [
// //     'achraf', 'walid', 'ahmed', 'warda', 'smair', 'mohammed'];
// // console.log(students[0]);
// // console.log(students[5]);
// // // ======================================================================================
// // // exercice 5
// // // ======================================================================================
// // let naMe = "achraf";
// // let age = 23;
// // let phone = '0597732693';
// // let city = 'alhoceima'
// // console.log(`${naMe} is ${age} years old, lives in ${city} and has the phone number ${phone}
// // `);
// // ======================================================================================
// // bonus
// // ======================================================================================
// // let favGame = prompt("what is your favourite game ?")
// // if (favGame !== "") {
// // console.log('my favourite game is' + favGame);


// // }
// // let favfood = prompt('what is your favourite food ?')
// // if (favfood !== "") {
// //     console.log('my favourite food is' + favfood);
    
// // }
// // let favBrand = prompt('what is your favourite brand')
// // if (favBrand !== '') {
// //     console.log('my favourite food is' + favBrand);
    
// // }


// // let favGame = prompt("what is your favourite game ?")
// // let favfood = prompt('what is your favourite food ?')
// // let favBrand = prompt('what is your favourite brand ?')
// // if (favGame !== "" && favfood !== '' && favBrand !== '') {
// // console.log('my favourite game is ' + favGame + " favourite food is " + favfood + " and my favourite brand is "+ favBrand + "" )
// // console.log(`my favourite game is ${favGame}   favourite food is ${ favfood } and my favourite brand is ${favBrand} `)
// // }else{
// //     console.log('fill up the form quistion');
    
// // }
// function AccountCreation() {
//     let user = prompt(`tap 1 to signUp
// tap 2 to logIn
// tap 3 to change your password
// or type "exit" to close the app`);
//     while (true) {

//         // الخروج من البرنامج كاملاً
//         if (user === null || user.toLowerCase() === 'exit') {
//             alert("Application closed.");
//             break; 
//         }

//         // 1. خيار التسجيل
//         if (user == 1) {
//             let signUpInput = prompt('--- signUp ---\nEnter your username (or type "exit" to go back):');
//             // إذا كتب exit أو ضغط Cancel، لا نفعل شيء فيعود تلقائياً للقائمة الرئيسية
//             if (signUpInput !== null && signUpInput.toLowerCase() !== 'exit') {
//                 alert(`Account created for ${signUpInput}!`);
//             }
//         }
        
//         // 2. خيار تسجيل الدخول
//         if (user == 2) {
//             let loginInput = prompt('--- login ---\nEnter your username (or type "exit" to go back):');
//             if (loginInput !== null && loginInput.toLowerCase() !== 'exit') {
//                 alert(`Logged in as ${loginInput}!`);
//             }
//         }
        
//         // 3. خيار تغيير كلمة المرور
//         if (user == 3) {
//             let passwordInput = prompt('--- change password ---\nEnter new password (or type "exit" to go back):');
//             if (passwordInput !== null && passwordInput.toLowerCase() !== 'exit') {
//                 alert("Password changed successfully!");
//             }
//         }
//     }
// }

// AccountCreation();
