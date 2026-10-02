// *======================== start besmillah ======================* // 
class Animal {
    makeSound(){
        console.log(`animal sound`);
        
    }
}

let animalsARR = [];

class Dog extends Animal{
    makeSound(){
        console.log(`woof!`);
    }
}
let dogy = new Dog()
dogy.makeSound();
animalsARR.push(dogy)
class Cat extends Animal{
    makeSound(){
        console.log(`Meow!`);
    }
}
let caty = new Cat();
caty.makeSound();
animalsARR.push(caty)


console.log(animalsARR);
for (let i = 0; i < animalsARR.length; i++) {
   animalsARR[i].makeSound();
}

// ! exo2 
class BanckAccount{
    constructor(owner){
        this.owner= owner;
    }
    describe(){
        console.log(`${this.owner} has a bank account`);
        
    }
}

let users = [];

class SavingsAccount extends BanckAccount{
    constructor(owner){
        super(owner);
    };
    describe(){
        console.log(`${this.owner} has a savings  account`);

    }
}
let save1 = new BanckAccount('ZACK');
users.push(save1);
class BusinessAccount extends BanckAccount{
    constructor(owner){
        super(owner);
    };
    describe(){
        console.log(`${this.owner} has a business  account`);

    }
}
let busness1 = new BanckAccount('hamza');
users.push(busness1);
console.log(users);
for (let i = 0; i < users.length; i++) {
    users[i].describe();
    
}

// ! exo 3 :
class Employee {
    // #name
    // #salary
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    getBonus(){
        return 0
    }
    
}
let Employees = [];
class Developer extends Employee{
    constructor(name,salary){
        super(name,salary);
    }
    getBonus(){
       console.log(`
        ${this.name}:${this.salary * 0.10}
        `);
        
    }
}
let dev = new Developer('zack',8000)
dev.getBonus();
Employees.push(dev)

class Designer  extends Employee{
    constructor(name,salary){
        super(name,salary);
    }
    getBonus(){
        console.log(`
        ${this.name}:${this.salary * 0.05}
        `);
    }
}
let desi = new Designer('hamza',6000)
desi.getBonus();
Employees.push(desi);
for (let i = 0; i < Employees.length; i++) {
    Employees[i].getBonus();
    
}

