
let form = document.querySelector('form');
let inpt = document.querySelector('input');
let liste = document.querySelector('ul');
let  para = document.querySelector('#parag');
let prase = localStorage.getItem('students')
let jprase = JSON.parse(prase) || [];
console.log(localStorage);
console.log(jprase);

let counter = 0;
let students = []
jprase.forEach(element => {
    let newLI = document.createElement('li')
    newLI.textContent=element
    if (liste.appendChild(newLI)) {
        
        counter++;
        students.push(newLI.textContent)
    }
  
    count()
   
});
function count() {
    para.textContent= `Total Students: ${counter}`
}
form.addEventListener('submit',(stop)=>{
    stop.preventDefault()
    // inpt.value
    // console.log(inpt.value);
    
    if (inpt.value === '') {
        alert("Please enter a student name")
        return;
    }
    let newLI = document.createElement('li')
    newLI.textContent=inpt.value
    console.log(newLI);
    
    if (liste.appendChild(newLI)) {
        
        counter++;
        students.push(newLI.textContent)
    }
    // console.log(students);
    let json= JSON.stringify(students)
    localStorage.setItem('students',json)
    
    para.textContent= `Total Students: ${counter}`
    inpt.value=''
})




// !!!!!!!!!!!!!!!!!
let paragraph = document.getElementById('par')
let inp = document.getElementById('studentName')
let typingTimer;
const doneTypingInterval = 1000;


inp.addEventListener('input',()=>{
    
        paragraph.textContent='user is tayping ...'
        
clearTimeout(typingTimer);
 typingTimer = setTimeout(() => {
     paragraph.textContent = ''; 
 }, doneTypingInterval);

})
// localStorage.clear()




