// *======================== start besmillah ======================* // 
let ourCourses = document.querySelector('.our-courses');
let courses = document.querySelector('.courses');
let form = document.querySelector('.form');
let NameInput = document.getElementById('NameInput');
let EmailInput = document.getElementById('EmailInput');
let CourseSelect = document.getElementById('CourseSelect');
let ExperienceSelect = document.getElementById('ExperienceSelect');
let ScheduleSelect = document.getElementById('ScheduleSelect');
let FormatSelect = document.getElementById('FormatSelect');
let listItems = document.querySelectorAll('.list-items');
let confirmationInput = document.getElementById('confirmationInput');//! until finish

// ? <<<<<>>>> ? //
// ! ERROR MESAGES:
let errorName = document.getElementById('errorName');
let errorEmail = document.getElementById('errorEmail');
let errorCoures = document.getElementById('errorCoures');
let errorExp = document.getElementById('errorExp');
let errorSchedule = document.getElementById('errorSchedule');
let errorFormat = document.getElementById('errorFormat');
let errorConfirmation = document.getElementById('errorConfirmation');
// ? <<<<<>>>> ? //
let dataarrry = [];
// ?<<<<<<>>>>> ? //
// ! HIDEN INFORMATION :
let hiedenDiv = document.querySelector('.div-form')
let introPara = document.getElementById('introPara');
let levelDisply = document.getElementById('levelDisply');
let courseDisplay = document.getElementById('courseDisplay');
let student = document.getElementById('student');
let EmailDisplay = document.getElementById('EmailDisplay');
let ScheduleDisplay = document.getElementById('ScheduleDisplay');
let FormatDisplay = document.getElementById('FormatDisplay');
let editBTN = document.getElementById('editBTN');
// ?<<<<<<>>>>> ? //


// *=======================================================
// *=======================================================
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].textContent);
    let newOption = document.createElement('option');
    newOption.textContent = listItems[i].textContent;
    CourseSelect.appendChild(newOption);
    listItems[i].addEventListener('click', (e) => {
        let anyCourse = e.target
        // console.log(any);

        CourseSelect.value = anyCourse.textContent;

    })
};
ourCourses.addEventListener('click', () => {
    courses.classList.toggle('display');
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputsValidation()) {
        dataarrry.push({
            FullName: NameInput.value.trim().toLowerCase(),
            Email: EmailInput.value.trim().toLowerCase(),
            Course: CourseSelect.value,
            Experience: ExperienceSelect.value,
            Schedule: ScheduleSelect.value,
            Format: FormatSelect.value,
        });
        displayInfo();
        hiedenDiv.style.display = 'block';
    }
    console.log(dataarrry);
   
    


});

editBTN.addEventListener('click', () => {
    hiedenDiv.style.display = 'none';

})
function inputsValidation() {
    let nom1 = NameInput.value.toLowerCase().trim();
    let email = EmailInput.value.toLowerCase().trim()
    if (nom1 === '') {
        errorName.textContent = 'This field is requaired !';
        errorName.style.color = 'red';
        return

    } else if (!/^[A-Za-z ]+$/.test(nom1)) {
        errorName.textContent = 'Numbers not allowed !';
        errorName.style.color = 'red';
        return
    } else if (nom1.length > 25) {
        errorName.textContent = 'Name is too long ( only less than 25 carachters) !';
        errorName.style.color = 'red';
        return
    } else if (email === '') {
        errorEmail.textContent = 'This field is requaired !';
        errorEmail.style.color = 'red';
        return
    } else if (!email.includes('.') || email.startsWith('.') || email.indexOf('@') > email.indexOf('.')) {
        errorEmail.textContent = 'Please enter a valide Email !';
        errorEmail.style.color = 'red';
        return
    } else if (CourseSelect.value === '') {
        errorCoures.textContent = 'This field is requaired !';
        errorCoures.style.color = 'red';
        return
    } else if (ExperienceSelect.value === '') {
        errorExp.textContent = 'This field is requaired !';
        errorExp.style.color = 'red';
        return
    } else if (ScheduleSelect.value === '') {
        errorSchedule.textContent = 'This field is requaired !';
        errorSchedule.style.color = 'red';
        return
    } else if (FormatSelect.value === '') {
        errorFormat.textContent = 'This field is requaired !';
        errorFormat.style.color = 'red';
        return
    }
    else {
        errorName.textContent = '';
        errorEmail.textContent = '';
        errorCoures.textContent = '';
        errorExp.textContent = '';
        errorSchedule.textContent = '';
        errorFormat.textContent = '';
        errorConfirmation.textContent = '';

    }
    return true;
};
function displayInfo() {
    for (let i = 0; i < dataarrry.length; i++) {
        let data = dataarrry[i];
        introPara.textContent = `Nice to meet you, ${data.FullName}. Here is your learning plan.`
        levelDisply.textContent = data.Experience;
        courseDisplay.textContent = data.Course;
        student.textContent = data.FullName;
        EmailDisplay.textContent = data.Email;
        ScheduleDisplay.textContent = data.Schedule;
        FormatDisplay.textContent = data.Format;
    }
}