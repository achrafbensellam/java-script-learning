// *======================== start besmillah ======================* // 
let form = document.getElementById('form');
let btn = document.getElementById('btn');
let studentnameinpt = document.getElementById('studentName');
let Grade1 = document.getElementById('Grade1');
let Grade2 = document.getElementById('Grade2');
let Grade3 = document.getElementById('Grade3');
let Grade4 = document.getElementById('Grade4');
let Grade5 = document.getElementById('Grade5');
let namenotvalid = document.getElementById('namenotvalid');
let grade1notvalid = document.getElementById('grade1notvalid');
let grade2notvalid = document.getElementById('grade2notvalid');
let grade3notvalid = document.getElementById('grade3notvalid');
let grade4notvalid = document.getElementById('grade4notvalid');
let grade5notvalid = document.getElementById('grade5notvalid');
let namenotvalidduration;
let grade1notvalidduration;
let grade2notvalidduration;
let grade3notvalidduration;
let grade4notvalidduration;
let grade5notvalidduration;
let dataarray = [];
let cardresults = document.querySelector('.cardresults');
let cardpassedresults = document.querySelector('.cardpassedresults');
let cardfaildresults = document.querySelector('.cardfaildresults');
// ? ========================
// ? ========================
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
btn.addEventListener('click', () => {
    if (inputvalidtion()) {
        stordata(studentnameinpt.value, Grade1.value, Grade2.value, Grade3.value, Grade4.value, Grade5.value);
        studentnameinpt.value = '';
        Grade1.value = '';
        Grade2.value = '';
        Grade3.value = '';
        Grade4.value = '';
        Grade5.value = '';
     claculateaverage();
        

    }
    console.log(dataarray);


});

// ! ================== input validation :
function inputvalidtion() {

    if (studentnameinpt.value == '') {
        studentnameinpt.setAttribute('required', '');
        namenotvalid.textContent = 'not valid !';
        namenotvalid.style.color = 'red';
        clearTimeout(namenotvalidduration)
        namenotvalidduration = setTimeout(() => {
            namenotvalid.textContent = '';

        }, 1500);
    } else if (Grade1.value == '') {
        Grade1.setAttribute('required', '');
        grade1notvalid.textContent = 'not valid !';
        grade1notvalid.style.color = 'red';
        clearTimeout(grade1notvalidduration)
        grade1notvalidduration = setTimeout(() => {
            grade1notvalid.textContent = '';

        }, 1500);
    } else if (Grade1.value < 0 || Grade1.value > 20) {
        alert('not valid : number must be between 0 & 20');
    } else if (!/^[0-9]+$/.test(Grade1.value)) {
        alert('only numbers accepted');
    } else if (Grade2.value == '') {
        Grade2.setAttribute('required', '');
        grade2notvalid.textContent = 'not valid !';
        grade2notvalid.style.color = 'red';
        clearTimeout(grade2notvalidduration)
        grade2notvalidduration = setTimeout(() => {
            grade2notvalid.textContent = '';

        }, 1500);
    } else if (Grade2.value < 0 || Grade2.value > 20) {
        alert('not valid : number must be between 0 & 20');
    } else if (!/^[0-9]+$/.test(Grade2.value)) {
        alert('only numbers accepted');
    } else if (Grade3.value == '') {
        Grade3.setAttribute('required', '');
        grade3notvalid.textContent = 'not valid !';
        grade3notvalid.style.color = 'red';
        clearTimeout(grade3notvalidduration)
        grade3notvalidduration = setTimeout(() => {
            grade3notvalid.textContent = '';

        }, 1500);
    } else if (Grade3.value < 0 || Grade3.value > 20) {
        alert('not valid : number must be between 0 & 20');
    } else if (!/^[0-9]+$/.test(Grade3.value)) {
        alert('only numbers accepted');

    } else if (Grade4.value == '') {
        Grade4.setAttribute('required', '');
        grade4notvalid.textContent = 'not valid !';
        grade4notvalid.style.color = 'red';
        clearTimeout(grade4notvalidduration)
        grade4notvalidduration = setTimeout(() => {
            grade4notvalid.textContent = '';

        }, 1500);
    } else if (Grade4.value < 0 || Grade4.value > 20) {
        alert('not valid : number must be between 0 & 20');
    } else if (!/^[0-9]+$/.test(Grade4.value)) {
        alert('only numbers accepted');

    } else if (Grade5.value == '') {
        Grade5.setAttribute('required', '');
        grade5notvalid.textContent = 'not valid !';
        grade5notvalid.style.color = 'red';
        clearTimeout(grade5notvalidduration)
        grade5notvalidduration = setTimeout(() => {
            grade5notvalid.textContent = '';

        }, 1500);
    } else if (Grade5.value < 0 || Grade5.value > 20) {
        alert('not valid : number must be between 0 & 20');
    } else if (!/^[0-9]+$/.test(Grade5.value)) {
        alert('only numbers accepted');

    } else {

        return true;
    }
}
// ! =============================== stor data in the array :
function stordata(studentnameinpt, grade1, grade2, grade3, grade4, grade5) {
    let dataobject = {
        studentName: studentnameinpt,
        grads: [
            grade1,
            grade2,
            grade3,
            grade4,
            grade5,]
    };
    dataarray.push(dataobject);
}
// ! ================================= calculate the average :
function claculateaverage() {
    // dataarray.forEach((e) => {
        let e = dataarray[dataarray.length-1]
        let averageValue = 0;
        for (let i = 0; i < e.grads.length; i++) {
            averageValue += Number(e.grads[i]);

        }
        averageValue = averageValue / 5
        
        if (averageValue >= 10) {
            let student = document.createElement('h4');
            let average = document.createElement('p');
            cardpassedresults.appendChild(student);
            cardpassedresults.appendChild(average);
            student.textContent =`- Student Name :${e.studentName}`;
            average.textContent =`- Average : ${ averageValue}`;
            
        } else {
            let student1 = document.createElement('h4');
            let average1 = document.createElement('p');
            cardfaildresults.appendChild(student1);
            cardfaildresults.appendChild(average1);
            student1.textContent =`- Student Name :${e.studentName}`;
            average1.textContent =`- Average : ${ averageValue}`;
        }
        findingHighestLowestGrade(averageValue);
        if (averageValue < 10) {
            let pass = document.createElement('p')
            cardfaildresults.appendChild(pass);
            pass.textContent = ' Needs improvement'; 
        }else if (averageValue >= 10 && averageValue < 12) {
            let pass = document.createElement('p')
            cardpassedresults.appendChild(pass);
            pass.textContent = ' Pass'; 

        }else if (averageValue >= 12 && averageValue < 14) {
            let pass = document.createElement('p')
            cardpassedresults.appendChild(pass);
            pass.textContent = ' Good'; 
        }else if (averageValue >=14 && averageValue < 16) {
            let pass = document.createElement('p')
            cardpassedresults.appendChild(pass);
            pass.textContent = ' Very good'; 
        }else{
            let pass = document.createElement('p')
            cardpassedresults.appendChild(pass);
            pass.textContent = ' Excellent'; 
        }

    // })

}
// ! ================================== finding the highest and lowest grades :
function findingHighestLowestGrade(averageValue) {
    // dataarray.forEach((e) => {
        let e = dataarray[dataarray.length-1]
        let highest = e.grads[0];
        for (let i = 0; i < e.grads.length; i++) {
            if (Number(e.grads[i]) > highest) {
                highest = Number(e.grads[i])
            }
        }
        let lowest = e.grads[0];
        for (let i = 0; i < e.grads.length; i++) {
            if (Number(e.grads[i]) < lowest) {
                lowest = Number(e.grads[i]);
            }
        }
        if (averageValue >= 10) {
            
        let highestpoint = document.createElement('p');
        let lowestpoint = document.createElement('p');
        
        cardpassedresults.appendChild(highestpoint);
        cardpassedresults.appendChild(lowestpoint);
        
        highestpoint.textContent = `- Highest point : ${highest}`  ;
        lowestpoint.textContent = `- Lowest point : ${lowest}` ;
        }else{
            let highestpoint = document.createElement('p');
        let lowestpoint = document.createElement('p');
        
        cardfaildresults.appendChild(highestpoint);
        cardfaildresults.appendChild(lowestpoint);
        
        highestpoint.textContent = `- Highest point : ${highest}` ;
        lowestpoint.textContent = `- Lowest point : ${lowest}` ;
        }

    // });
}
// ! ================================== display data :