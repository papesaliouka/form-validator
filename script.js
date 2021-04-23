const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false

function validateForm(){
    // Using Constraint Api
    isValid = form.checkValidity();
    // Style main message for error
    if(!isValid){
        message.textContent = 'Please fill out all fields';
    message.style.color= 'red';
    messageContainer.style.border = '1px solid red';
    return
    }
    // Cheeck to see if passwords match
    if(password1EL.value===password2EL.value){
        passwordsMatch =true;
        password1EL.style.border='green';
        password1EL.style.border='green';
    }else{
        passwordsMatch =false;
        password1EL.style.border='red';
        password1EL.style.border='red';
        message.textContent ='Make sure password match';
        message.color ='red';
        messageContainer.border.color='red';
        return
    }
    // If form is valid and passwords match
    if(isValid && passwordsMatch){
        message.style.color = 'green';
        message.textContent ='Successfully register';
        messageContainer.style.border.color= 'green';
    }
}

function processFormData(e){
    e.preventDefault();
    // Validate form
    validateForm();
    //Submit Data if valid
    if(isValid && passwordsMatch){
        storeFormData();
    }
}

function storeFormData(){
    const user ={
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password : form.password.value
    }
}

// Even listener
form.addEventListener('submit', processFormData);