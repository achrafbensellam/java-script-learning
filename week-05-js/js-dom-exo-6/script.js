// *=========================== start besmillah ================================
let form = document.querySelector('form')
let inpt = document.querySelector('input')
let btn = document.querySelector('#btn')
let test = document.querySelector('#paragtest')
let list = document.querySelector('ul')
let counter = document.querySelector('p')
let studentCounter= 0

form.addEventListener('submit', (stop) => {
    stop.preventDefault();

})
btn.addEventListener('click', (stop) => {
    stop.preventDefault();

    inptValidation();
})
function inptValidation() {
    if (inpt.value === '') {
        alert('empty')
        return
    }

    if (inpt.value.replaceAll(' ', '').length < 3) {
        // test.textContent ='to short';
        alert('to short')
        return
    } else if (inpt.value.replaceAll(' ', '').length > 20) {
        alert('too big')
        return
    }
    addstudent()
}
function addstudent() {
    let sel = document.querySelectorAll('li span')
    // sel.forEach(element=>{if (element.textContent === inpt.value) {
    //      alert('ex')
    //      return
    //  }})
    for (const element of sel) {
        if (element.textContent=== inpt.value) {
            alert('Student already exist')
            return
        }
    }
    let li = document.createElement('li')
    list.appendChild(li)
    let span = document.createElement('span')
    li.appendChild(span)
    span.textContent = inpt.value;
    inpt.value = '';
    let BTN1= document.createElement('button')
    let BTN2= document.createElement('button')
    li.appendChild(BTN1)
    li.appendChild(BTN2)
    BTN1.textContent='Edit'
    BTN2.textContent='Delete'
    function edit() {
        BTN1.addEventListener('click',()=>{
            let textToEdit = span.contentEditable === 'true';
            if (textToEdit) {
                span.contentEditable ='false'
                BTN1.textContent='Edit'

            }else {
                
                span.contentEditable ='true';
                BTN1.textContent='save';
                span.focus();
                if (span.length<3) {
                    alert('axkadir')

                }
            }
        })
    }
    edit()
    function delet() {
        BTN2.addEventListener('click',()=>{
            li.remove()
            studentCounter--
            counter.textContent=`total : ${studentCounter}`
            if (studentCounter == 0){
    counter.textContent=`total : no students found`
}
        })
    }
    delet()
studentCounter ++
counter.textContent=`total : ${studentCounter}`

}
if (studentCounter == 0){
    counter.textContent=`total : no students found`
}

