// * start besmillah
let developers=[{
   firstName: "achraf",
   age: 23,
   country: "Morocco",
   skills: ["html", "css", "javascript"],
   isEmployed: false,
   salary:0
},
{
   firstName: "mosaab",
   age: 30,
   country: "yamen",
   skills: ["html", "css", "javascript"],
   isEmployed: true,
   salary: 18000
},
{
   firstName: "Yassine",
   age: 16,
   country: "Morocco",
   skills: ["html", "css", "javascript"],
   isEmployed: false,
   salary:0
}]
// ============================================================================================
// 1️⃣ displayDevelopers()
// ============================================================================================
function displayDevelopers(dev) {
    console.log(dev);
    // console.log(dev[0].firstName,dev[0].country,dev[0].salary);
    dev.forEach(element => {console.log(element.firstName, element.country, element.salary);

    });
   
    
}
displayDevelopers(developers)
// ============================================================================================
// 2️⃣ addDeveloper()
// ============================================================================================
function addDevolopers(pushing,firstName,age,country,skills,isEmployed,salary) {
pushing.push({
   firstName,age,country,skills,isEmployed,salary
})
console.log(pushing);

}
addDevolopers(developers,'jamal' ,44 , 'saudiaarabia',['json','talwind','java','python'],true,10000);
// ============================================================================================
// 3️⃣ showAdultDevelopers()
// ============================================================================================
function feltry(any) {
   console.log( any.filter((element)=> element.age >=18));
}
feltry(developers);
// ============================================================================================
// 4️⃣ showUnemployedDevelopers()
// ============================================================================================
function showUnemployedDevelopers(many) {
     console.log( many.filter((element)=> element.isEmployed ===true));
}
showUnemployedDevelopers(developers)
// ============================================================================================
// 5️⃣ addSkill()
// ============================================================================================
function addSkill(newskill,index) {
    newskill[index].skills.push('bash')
    console.log(newskill[index]);
}
addSkill(developers,[0])
// ============================================================================================
// 6️⃣ removeSkill()
// ============================================================================================
console.log(developers[3].skills);

function removeSkill(remove,index) { 
    remove[index].skills.splice(1,1)
    console.log(remove[index]);
    
}
removeSkill(developers,[3])
// ============================================================================================
// 7️⃣ updateSalary()
// ============================================================================================
function updateSalary(salary,index,price) {
    if (salary[index].isEmployed === true) {
        salary[index].salary=price;
        console.log(salary[index]);  
    }
    else{
        console.log( 'not employed yet' ); 
    }
}
updateSalary(developers,[1],20000)
// ============================================================================================
// 8️⃣ findDeveloper()
// ============================================================================================
// findDeveloper()
function findDeveloper(find,nom){

console.log(find.find((nOm)=>nOm.firstName === nom))
}
findDeveloper(developers,'Yamine')
// ============================================================================================
// 9️⃣ showHighSalaryDevelopers()
// ============================================================================================
function showHighSalaryDevelopers(high){
    console.log(high.filter((price)=> price.salary >5000 ));
}
showHighSalaryDevelopers(developers)
// ============================================================================================
// 🔟 calculateTotalSalaries()
// ============================================================================================
function calculateTotalSalaries(calcul) {
    let total = 0;
   calcul.forEach(amount=> {total += amount.salary});
   console.log(total);
}
calculateTotalSalaries(developers)
// ============================================================================================
// 1️⃣1️⃣ showDeveloperSkills()
// ============================================================================================
function showDeveloperSkills(devskills) {
    // devskills.forEach((member)=>{console.log(member.firstName +'\n'+ member.skills)});
    // devskills.forEach((member)=>{console.log(member.firstName )
    // console.log( member.skills)});
//    devskills.forEach(element=>{console.log(element.firstName);
//     element.skills.forEach(element=>{console.log(element)}
//     );
    
//    })
devskills.forEach(element=>{console.log( 'NAME : ' +element.firstName);
    element.skills.forEach(element=>{console.log('skills : '+element);
    });
    
})
    
}
showDeveloperSkills(developers)