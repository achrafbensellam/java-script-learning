// *======================== start besmillah ======================* // 
let form = document.getElementById('form');
let nameInput = document.getElementById('nameInput');
let soldeInput = document.getElementById('soldeInput');
let addingBtn = document.getElementById('addingBtn');
let acounts = [];
let errorText = document.getElementById('errorText');
let showDataSection = document.getElementById('showDataSection');
// todo second form :
let form2 = document.getElementById('form2');
let searchinput = document.getElementById('searchinput');
let SearchBTN = document.getElementById('SearchBTN');
let searchResult = document.getElementById('searchResult');
let totalSolde = document.getElementById('totalSolde');

class BanckAccount {
    constructor(name, solde) {
        this.name = name;
        this.solde = solde;
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputsValidatoin()) {
        let nom = nameInput.value.trim().toLowerCase()
        let user = new BanckAccount(nom, +soldeInput.value)
        acounts.push(user);
        nameInput.value = '';
        soldeInput.value = '';
        displayAccounts()
        tolal()
    }
    console.log(acounts);

})

function inputsValidatoin() {
    if (nameInput.value.trim() === '') {
        errorText.textContent = 'enter a valide name';
        errorText.style.color = 'red';
        return
    } else if (soldeInput.value <= 0 || soldeInput.value === '') {
        errorText.textContent = 'enter a valid solde';
        errorText.style.color = 'red';
        return
    } else {
        errorText.textContent = '';
    }
    return true
}

function displayAccounts() {
    showDataSection.textContent = '';
    for (let i = 0; i < acounts.length; i++) {
        let card = document.createElement('div');
        let namePara = document.createElement('p');
        let soldePara = document.createElement('p');
        namePara.textContent = `name : ${acounts[i].name}`;
        soldePara.textContent = `solde : ${acounts[i].solde}`;
        card.appendChild(namePara);
        card.appendChild(soldePara);
        showDataSection.appendChild(card);

    }
}


form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchAccount();
})
function searchAccount() {
    // let findacount = acounts.find( e => e.name === searchinput.value)
    // console.log(findacount);

    
    for (let i = 0; i < acounts.length; i++) {
        searchResult.textContent = '';
        if (searchinput.value === acounts[i].name) {
            let searchedDiv = document.createElement('div');
            let nome = document.createElement('p');
            let lesolde = document.createElement('p');
            nome.textContent = `name : ${acounts[i].name}`;
            lesolde.textContent = `solde : ${acounts[i].solde}`;
            searchedDiv.appendChild(nome);
            searchedDiv.appendChild(lesolde);
            searchResult.appendChild(searchedDiv);
            return
            
        }else{   
            let notfound = document.createElement('p');
            notfound.textContent = `acount not found`;
            searchResult.appendChild(notfound);
        }
    }
}
function tolal() {
    let ALLtotal = 0;
    for (let i = 0; i < acounts.length; i++) {
        ALLtotal += acounts[i].solde
        
    };
    totalSolde.textContent = ` Totale solde : ${ALLtotal} MAD`
}
