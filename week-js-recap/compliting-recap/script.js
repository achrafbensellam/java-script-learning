// *======================== start besmillah ======================* // 
let name = document.querySelector('#name')
let notes = document.querySelectorAll('.inpts')
let btn = document.querySelector('#calculateBtn')
let Eerror = document.querySelector('.error')
let resultBox = document.querySelector('#resultCard')
console.log(name);
console.log(notes);
console.log(btn);
console.log(Eerror);
console.log(resultBox);

let form = document.querySelector('.Form')

console.log(form);




function calculateAverage(grades) {
    let total = 0
    for (let i = 0; i < grades.length; i++) {
        total = total + Number(grades[i])
    }

    return total / grades.length
}

function getMention(average) {
    if (average < 10) {
        return "Needs improvement";

    }
    else if (average < 12) {
        return "pass";
    }
    else if (average < 14) {
        return "Good";
    } else if (average < 16) {
        return "Very good";
    }
    else {
        return "Excellent";
    }
}

function highestAndLOwest(grades) {
    let highest = grades[0]
    let lowest = grades[0]

    for (let i = 1; i < grades.length; i++) {

        if (highest < grades[i]) {
            highest = grades[i]
        }

        if (lowest > grades[i]) {
            lowest = grades[i]

        }
    }
    return {
        highest: highest,
        lowest: lowest
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // btn.addEventListener('click',()=>{
        // Eerror.textContent = '';
        resultBox.style.display = 'none';
        if (inputsValidation() == true) {
            
            let grades = stordata();
            let highestLowest = highestAndLOwest(grades);
            let average = calculateAverage(grades);
            let mention = getMention(average);
            showData(highestLowest.highest, highestLowest.lowest, average, mention)
        name.value = '';
        notes.forEach((e) => { return e.value = '' })
        
    } else {
        Eerror.textContent = '';
    }

    // })
});


// !!!
function inputsValidation() {
    if (name.value === '') {
        Eerror.textContent = 'ERROR';
    }
    notes.forEach((e) => {
        if (e.value === '') {
            Eerror.textContent = 'ERROR';

        } else if (e.value < 0 || e.value > 20) {
            alert('not valid : the value is limited between 0 & 20 !')
        }
    })
    return true
}
function stordata() {
    let arrayData = [];
    notes.forEach(e => {

        arrayData.push(e.value)
    });
    return arrayData
}
function showData(highest, lowest, average, mention) {
    resultBox.innerHTML = `
    <p>- Student name : ${name.value}</p>
    <p>- Highest point : ${highest}</p>
    <p>- Lowest point : ${lowest}</p>
    <p>- Average : ${average}</p>
    <p>${mention}</p>`
    // let NAME = document.createElement('p')
    // let high = document.createElement('p')
    // let low = document.createElement('p')
    // let ave = document.createElement('p')
    // let men = document.createElement('p')
    // NAME.textContent = ``;
    // high.textContent = ``;
    // low.textContent = ``;
    // ave.textContent = ``;
    // men.textContent = ;
    // resultBox.appendChild(NAME)
    // resultBox.appendChild(high)
    // resultBox.appendChild(low)
    // resultBox.appendChild(ave)
    // resultBox.appendChild(men)
    resultBox.style.display = 'block';

}

