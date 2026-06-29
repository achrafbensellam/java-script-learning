// *=====================================start besmillah==============================================
let changestudent = document.querySelector('h1');
changestudent.textContent='MolenGeek Dashboard';
let btn = document.querySelector('button');
let ipuT= document.querySelector('input');
let ra9m = 0
btn.addEventListener('click',()=>{
    ipuT.value
    console.log(ipuT.value);
    // studentsadded.textContent=ipuT.value
    //    kteb.textContent=kteb
    if (ipuT.value === '') {
        alert('please enter a student name');
        return;
    }
    let studentsadded= document.querySelector('ul')
    let newelement = document.createElement('li')
    studentsadded.appendChild(newelement)
    newelement.textContent= ipuT.value;
    newelement.innerHTML = ipuT.value +' '+ '- active'
    newelement.classList.add('student')
    newelement.style.backgroundColor='limegreen'
    newelement.style.padding='3%'
    newelement.style.margin='3%'
    let total = document.querySelector('p');
    if (ipuT.value !== '' ) {
        ra9m += 1 
    }
    ipuT.value=''
   
    newelement.addEventListener('click',(hadath)=>{
         newelement.classList.toggle('graduated');
       
         console.log(hadath.target);
         
        })
        let butt= document.createElement('button');
        newelement.appendChild(butt)
        butt.textContent='delete'
        butt.addEventListener('click',()=>{
            newelement.remove()
            ra9m -= 1
            total.textContent='Total Students:'+' '+ra9m
        })
        
        total.textContent='Total Students:'+' '+ra9m
    })
