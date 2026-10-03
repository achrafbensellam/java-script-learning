// *======================== start besmillah ======================* //
const accounts = [
    { id: 1, name: "Ahmed", balance: 1000 },
    { id: 2, name: "Sara", balance: 500 },
    { id: 3, name: "Omar", balance: 200 }
];
let cardsDiv = document.getElementById('cardsDiv');
let form = document.getElementById('form');
let senderSelect = document.getElementById('senderSelect');
let receiverSelect = document.getElementById('receiverSelect');
let ErrorMSG = document.getElementById('ErrorMSG');
let amountinput = document.getElementById('amountinput');
let transferTransactions = document.getElementById('transferTransactions');
let undobtn = document.getElementById('undobtn');
let searchinput = document.getElementById('searchinput');

let historyarray = [];
if (historyarray.length == 0) {
    undobtn.style.display = 'none';

} else {
    undobtn.style.display = 'block';

}

function displayCards() {
    cardsDiv.textContent = '';
    for (let i = 0; i < accounts.length; i++) {
        let cards = document.createElement('div')
        let idparag = document.createElement('p');
        let nameparag = document.createElement('p');
        let balanceparag = document.createElement('p');
        cards.classList.add('cards');
        nameparag.classList.add('nameparag');
        cards.appendChild(nameparag);
        cards.appendChild(idparag);
        cards.appendChild(balanceparag);
        idparag.textContent = `id : ${accounts[i].id}`;
        nameparag.textContent = `${accounts[i].name}`;
        balanceparag.textContent = `balance : ${accounts[i].balance}`;
        cardsDiv.appendChild(cards);

    }

}
displayCards()

form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (inputsValidation()) {

        transferMoney();
        let senderValue = senderSelect.value
        let receiverValue = receiverSelect.value
        let amountValue = amountinput.value
        history1(senderValue, receiverValue, amountValue);

        let filtering = displayTransferedMony();
        senderSelect.value = '';
        receiverSelect.value = '';
        amountinput.value = '';

    }

});
function inputsValidation() {
    let sender = senderSelect.value;
    let findelement = accounts.find((e) => { return e.name === sender })
    if (senderSelect.value === receiverSelect.value) {
        ErrorMSG.textContent = 'sender and receiver shuld not be the same ';
        ErrorMSG.style.color = 'red'
        return
    } else if (amountinput.value === '' || amountinput.value <= 0) {
        ErrorMSG.textContent = 'amount can not be null';
        ErrorMSG.style.color = 'red'
        return
    } else if (findelement.balance < +amountinput.value) {
        ErrorMSG.textContent = 'not enogh money';
        ErrorMSG.style.color = 'red'
        return

    } else {
        ErrorMSG.textContent = '';

    }
    console.log(findelement);
    return true

};
function transferMoney() {
    let sender = senderSelect.value;
    let findesender = accounts.find((e) => { return e.name === sender })
    let receiver = receiverSelect.value;
    let findereceiver = accounts.find((e) => { return e.name === receiver })
    findesender.balance -= Number(amountinput.value);
    findereceiver.balance += Number(amountinput.value);
    displayCards();
}
function displayTransferedMony() {

    transferTransactions.textContent = '';
    for (let i = 0; i < historyarray.length; i++) {
        let hist = historyarray[i]
        let transactionParag = document.createElement('p');
        transactionParag.textContent =
            `${hist.sender} ==> ${hist.receiver} : ${hist.amount} `;
        transferTransactions.appendChild(transactionParag);
        transactionParag.classList.add('transferHistory');
    }


}

undobtn.addEventListener('click', () => {
    let lasttransaction = historyarray[historyarray.length - 1]
    let findundosender = accounts.find((e) => e.name === lasttransaction.sender)
    let findundoreceiver = accounts.find((e) => e.name === lasttransaction.receiver)
    findundosender.balance += +lasttransaction.amount
    findundoreceiver.balance -= +lasttransaction.amount
    historyarray.pop();
    displayCards();
    displayTransferedMony()

    console.log(historyarray);
    if (historyarray.length === 0) {
        undobtn.style.display = 'none';
    }

});

function history1(sender, receiver, amount) {
    let historyObject = {
        sender: sender,
        receiver: receiver,
        amount: amount
    }
    historyarray.push(historyObject);
    console.log(historyarray.length);
    if (historyarray.length === 0) {
        undobtn.style.display = 'none';
    } else {
        undobtn.style.display = 'block';

    }

}
searchinput.addEventListener('input', () => {

    search()
    
});

function search() {
    let value = searchinput.value
    let transferHistory = document.querySelectorAll('.transferHistory');
    for (let i = 0; i < transferHistory.length; i++) {
        if (transferHistory[i].textContent.includes(value)) {
            transferHistory[i].style.display = 'block';
        } else {
            transferHistory[i].style.display = 'none';
        }
    }

};