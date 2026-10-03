// *======================== start besmillah ======================* // 
let form = document.querySelector('.form');
let inputs = document.querySelectorAll('.inputsize');
const expenses = [];
let erorr = document.getElementById('erorr');
let erorrduration;
let nullduration;
let displayExpense = document.querySelector('.displayExpenses');
let totalamount = document.querySelector('#totalamount');
let numexpenses = document.getElementById('numexpenses');
let expensesCounter = expenses.length;
numexpenses.textContent = expensesCounter

// *===================================================
// *===================================================
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cleandata = inputsValues();
    if (cleandata) {
        expenses.push(cleandata);
        expensesCounter++;
        numexpenses.textContent = expensesCounter;
        let display = displayExpenses();
        let calcTotal = calcTotalExpenses();
        totalamount.textContent = `$ ${calcTotal}`;
        if (calcTotal >= 100) {
            displayExpense.classList.remove('normal')
            displayExpense.classList.add('expensive');
        } else {
            displayExpense.classList.remove('expensive');
            displayExpense.classList.add('normal')
        }
        deletButton(display.delete, display.conten, calcTotal)
        console.log(expenses);

    }
});
// ! ======================= geting data :
function inputsValues() {
    let values
    for (let i = 0; i < inputs.length; i++) {
        values = inputs[i]
        if (inputs[i].value.trim() === '') {
            erorr.textContent = 'try to fill all fields';
            erorr.style.color = 'red';
            clearTimeout(erorrduration);
            erorrduration = setTimeout(() => {
                erorr.textContent = '';
            }, 1500);


        } else if (inputs[1].value <= 0) {
            erorr.textContent = 'amount can not be null';
            erorr.style.color = 'red';
            clearTimeout(nullduration);
            nullduration = setTimeout(() => {
                erorr.textContent = '';
            }, 1500);
        } else {
            nom = inputs[0].value;
            amount = +inputs[1].value;
            category = inputs[2].value;
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';

            return {
                id: Date.now(),
                name: nom,
                amount: amount,
                category: category
            }
        }
    }


}
// ! ========================= display expenses : 
function displayExpenses() {
    // for (let i = 0; i < expenses.length; i++) {
    let expense = expenses[expenses.length - 1]
    let contenaire = document.createElement('div');
    let nameexpence = document.createElement('p');
    let categoryexpence = document.createElement('p');
    let amountexpence = document.createElement('p');
    let deletebtn = document.createElement('button');
    contenaire.appendChild(nameexpence);
    contenaire.appendChild(categoryexpence);
    contenaire.appendChild(amountexpence);
    contenaire.appendChild(deletebtn);
    displayExpense.appendChild(contenaire);
    nameexpence.textContent = expense.name
    categoryexpence.textContent = expense.category
    amountexpence.textContent = expense.amount
    deletebtn.textContent = 'DELETE'
    // let ID = Date.now()
    contenaire.classList.add(expense.id)
    return { delete: deletebtn, conten: contenaire };
    // }
    // expenses.forEach(element => {
    //     displayExpense.innerHTML = `
    //     <p>${element.name}</P>
    //     <p>${element.category}</P>
    //     <p>${element.amount}</P>
    //     `
    // });
}
// ! ======================== calculate total price expenses : 
function calcTotalExpenses() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount
    }
    return total
}
//  ! ======================= expense delete button :
function deletButton(deletebtn, contenaire,total) {
    deletebtn.addEventListener('click', (e) => {
        let elemetToDelete = e.target.parentElement;
        let elementid = elemetToDelete.classList.value;
        let findElement = expenses.find((e) =>
            e.id == elementid
        );
        let indx = expenses.indexOf(findElement);
        expenses.splice(indx, 1);
        contenaire.remove();

        expensesCounter--;
        numexpenses.textContent = expensesCounter;
        // let substractedprice = total - findElement.amount;
        // ! 
        let substractedprice = calcTotalExpenses();

        totalamount.textContent = `$ ${substractedprice}`;
    })
}