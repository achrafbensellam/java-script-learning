// *======================== start besmillah ======================* // 
class student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`Je m'appelle ${this.name} et j'ai ${this.age} ans.`);

    }
}
let walid = new student('walid', 30);
let ahmed = new student('ahmed', 23);
console.log(walid);
console.log(ahmed);

let nowfal = new student('nowfal', 30);
let achraf = new student('achraf', 23);
nowfal.introduce();
achraf.introduce();
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${this.balance}MAD`);

    }
    withdrow(amount){
        if (amount <= 0) {
            console.log('Montant invalid');
            return
            
        }else if(amount > this.balance){
            console.log('insuffisant ');
            return
        }else{
            this.balance -= amount
        }
    }
    showBalance(){
        console.log(`${this.name} your balance acount is ${this.balance}`);
        
    }
}
let acc1 = new BankAccount('achraf', 2000);
acc1.deposit(500);
acc1.withdrow(500);
acc1.showBalance();


