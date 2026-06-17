//===============================================================
// exo 1
//===============================================================
console.log(Array=["coding 20", "coding 21", "coding 22"]);
console.log(Array.length);
// console.log(Array[0]);
// console.log(Array[1]);
// console.log(Array[2]);
for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
    console.log(Array[index]);
    
    
}
//===============================================================
// exo 2
//===============================================================
let naMes = ['ahmed', 'redouan' , 'mohammed'];
console.log(naMes);
naMes.push('achraf');
console.log(naMes);
// ==============================================================
// exo 3
// ==============================================================
let changeName = ['ahmed', 'redouan' , 'mohammed'];
console.log(changeName);
changeName.push('achraf');
console.log( changeName);
changeName[2]='walid';
console.log(changeName);

// ==============================================================
// exo 4
// ==============================================================

let changeNAme = ['ahmed', 'redouan' , 'mohammed'];
console.log(changeNAme);
changeNAme.push('achraf');
console.log( changeNAme)
changeNAme[2]='walid'
console.log(changeNAme);
changeNAme.splice(0, 1);
console.log(changeNAme);
