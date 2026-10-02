// *======================== start besmillah ======================* // 
class Animal {
    #energy
    constructor(name, isPredator, energy) {
        this.name = name;
        this.isPredator = isPredator;
        if (energy >= 0 && energy <= 100) {
            this.#energy = energy
        }
    }
    get getEnergy() {
        return this.#energy
    }
    set setEnergy(value) {
        if (value >= 0 && value <= 100) {
            this.#energy = value;
        } else {
            console.log('energy not valid');

        }
    }
    eat() {
        if (this.getEnergy < 100) {

            this.setEnergy = this.#energy + 20;
        } else {
            console.log('max energy');

        }
    }
    makeSound() {
        return (`${this.name} make sound`);

    }

    move() {
        return (`${this.name} moving`);

    }

}

class Eagle extends Animal {

    constructor(name, isPredator, energy, canfly) {
        super(name, isPredator, energy);
        this.canfly = canfly;
    }
    makeSound() {
        return (`${this.name} Screech!`);

    }
    move(isEnogh) {
        if(isEnogh < 15){
            return (`${this.name} can't fly`)
        }else{

            return (`${this.name} fly`);
        }

    }
    cost() {
        if (this.getEnergy >= 15) {
            return this.setEnergy = this.getEnergy - 15
        } else {
            console.log(`not enogh energy`);


        }
    }

}


class Dog extends Animal {
    constructor(name, isPredator, energy, isPet) {
        super(name, isPredator, energy);
        this.isPet = isPet;
    }
    makeSound() {
        return (`${this.name} Woof!`);

    }
    move() {
        return (`${this.name} run`);

    }
    cost() {
        if (this.getEnergy >= 10) {
            return this.setEnergy = this.getEnergy - 10;
        } else {
            console.log('not enogh energy');
        }
    }

}

class Lion extends Animal {
    makeSound() {
        return (`${this.name} Roar!`);

    }
    move() {
        return (`${this.name} run`);

    }
    cost() {
        if (this.getEnergy >= 20) {
            return this.setEnergy = this.getEnergy - 20;
        } else {
            console.log('not enogh energy');

        }
    }
    attack(target){
        if (target.isPredator === true || this.getEnergy < 30) {
            console.log('rejected attack');
            return false
            
        }else{
            this.setEnergy = this.getEnergy - 30;
            target.setEnergy = target.getEnergy - 20;
            return true;
        }
    }
}

class Gazelle extends Animal {
    makeSound() {
        return (`${this.name} Bleat!`);
    }
    move() {
        return (`${this.name} jump`);
    }
    cost() {
        if (this.getEnergy >= 10) {
            return this.setEnergy = this.getEnergy - 10;
        } else {
            console.log('not enogh energy');
        }
    }
}
let Eagle1 = new Eagle('sky', true, 60, true);
let dogy = new Dog('dogy', false, 40, true);
let Lion1 = new Lion('simba', true, 80);
let Gazelle1 = new Gazelle('zina',false,50)
 
let Simulation = [];
Simulation.push(Eagle1,dogy,Lion1,Gazelle1);

for (let i = 0; i < Simulation.length; i++) {
   let sound = Simulation[i].makeSound();
    let move = Simulation[i].move();
    console.log(sound);
    console.log(move);   
}
//? - Simba attacks Zina, then tries to attack Sky.
Lion1.attack(Gazelle1);
Lion1.attack(Eagle1);

//? - Buddy eats, then tries setEnergy(150).
dogy.eat();
dogy.setEnergy = 150

//? - Display everyone’s final energy.
console.log(Eagle1.getEnergy);
console.log(dogy.getEnergy);
console.log(Lion1.getEnergy);
console.log(Gazelle1.getEnergy);


//? - Find the animal with the lowest energy.
let lowestEnergy
for (let i = 0 ; i < Simulation.length; i++) {
     lowestEnergy = Simulation[0].getEnergy;
    if(lowestEnergy > Simulation[i].getEnergy){
        lowestEnergy = Simulation[i]
    }
    
}
console.log(lowestEnergy);
console.log(Simulation);
Eagle1.cost();

console.log(Eagle1.move(Eagle1.getEnergy));
for (let i = 0; i < Simulation.length; i++) {
    if (Simulation[i].getEnergy < 30) {
        Simulation[i].eat();
    }
    
}
console.log(Eagle1.getEnergy);
console.log(dogy.getEnergy);
console.log(Lion1.getEnergy);
console.log(Gazelle1.getEnergy);