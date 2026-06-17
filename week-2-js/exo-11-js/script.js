let students = [
    {firstName:'achraf',
age:23,
country:'morocco',
skills:['html','css','javascript']
    },

    {firstName:'ahmed',
age:23,
country:'algeria',
skills:['html','css','javascript'] 
    },
    {firstName:'walid',
age:30,
country:'iraq',
skills:['html','css','javascript']
    }
];
console.log(students);
console.log(students[0].firstName);
console.log(students[1].country);
console.log(students[2].skills);
students[0].skills.push('gitBash');
students[1].age=20;
students[2].isGraduated = true;
students[0].skills.splice(0,1);
students.forEach(aaa => {
    console.log(aaa.firstName+': ' + aaa.country);  
})

let adultStudents=[
    {firstName:'achraf',
age:23,
country:'morocco',
skills:['html','css','javascript']
    },

    {firstName:'ahmed',
age:23,
country:'algeria',
skills:['html','css','javascript'] 
    },
    {firstName:'walid',
age:10,
country:'iraq',
skills:['html','css','javascript']
    }
];
let qwerty = adultStudents.filter(students => students.age > 18 )
console.log(qwerty);

console.log(adultStudents.filter(students => students.age > 18 ));
