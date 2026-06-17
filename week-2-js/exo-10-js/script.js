// ====================================================================================
// exo 1
// ====================================================================================
let skills = [
    'html','css','javascript'
];
console.log(skills);
console.log(skills.length);
console.log(skills[0]);
console.log(skills[2]);

// ====================================================================================
// exo 2
// ====================================================================================
let cars=['mercedece','audi','bmw'];
cars.push('nisan');
cars.pop(1);
console.log(cars);



// ====================================================================================
// exo 3
// ====================================================================================
let fruit = ['banana','orange','aplle'];
fruit.unshift('mange');
console.log(fruit);
fruit.shift(1);
console.log(fruit);


// ====================================================================================
// exo 4
// ====================================================================================
let water = ['sidiali','sais','ceil','harazem','sultan'];
water.splice(1, 1 ,'ifran');
water.splice(2,1);
console.log(water);

// ====================================================================================
// exo 5
// ====================================================================================
let nUmbers= [1,2,3,45,5];
console.log(nUmbers);
nUmbers.sort((a,b)=> a-b)
console.log(nUmbers);
nUmbers.reverse();
console.log(nUmbers);
// ====================================================================================
// exo 6
// ====================================================================================
let months= ['junuary','febrery','mars','april']
console.log( months.includes('mars'));
console.log( months.indexOf('april'));


// let mOnth = months.includes('mars');
// console.log(mOnth);
// let MONTH =  months.indexOf('april');
// console.log(MONTH);

// ====================================================================================
// exo 7
// ====================================================================================
let  years = [2000, 2001, 2002,2003, 2004,];
years.forEach((year,ind)=>{
    console.log(ind+': '+ year );
    
})
years.forEach(element =>{
    console.log(element , typeof element, years.indexOf(element));
    
})

// ====================================================================================
// exo 8
// ====================================================================================
let cards= [1,2,3,4,5]
console.log( cards.map((num)=> num*2));

// let card= cards.map((num)=> num*2);
// console.log(card);

// ====================================================================================
// exo 9
// ====================================================================================
let Numbers = [5 , 10, 15, 20, 25];
console.log( Numbers.filter((num)=> num>10));

// let NUmber= Numbers.filter((num)=> num>10);
// console.log(NUmber);
// ====================================================================================
// exo 10
// ====================================================================================
let speed = [9,7,10,13,15];

console.log(speed.find(aaa => aaa < 10));

// let sp = speed.find(SPeed);
// function SPeed(grat) {
//   return grat > 10;
// }
// console.log(sp);

