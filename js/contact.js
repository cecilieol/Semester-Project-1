const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#fullname-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const category = document.querySelector("#category");
const categoryError = document.querySelector("#category-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const submitButton = document.querySelector("#submit");
const submitted = document.querySelector(".submitted");


function validateForm(event) {
    event.preventDefault();

    if(fullName.value.trim().length >= 4) {
        nameError.style.display = "none";
        fullName.style.borderColor = "#ccc";
    } else {
        nameError.style.display = "block";
        fullName.style.borderColor = "red";
    }

    if(validateEmail(email.value)) {
        emailError.style.display = "none";
        email.style.borderColor = "#ccc";
    } else {
        emailError.style.display = "block";
        email.style.borderColor = "red";
    }

    if(category.selectedIndex !== 0) {
        categoryError.style.display = "none";
        category.style.borderColor = "#ccc";
    } else {
        categoryError.style.display = "block";
        category.style.borderColor = "red";
    }

    if(message.value.trim().length >= 30) {
        messageError.style.display = "none";
        message.style.borderColor = "#ccc";
    } else {
        messageError.style.display = "block";
        message.style.borderColor = "red";
    }
}

submitButton.addEventListener("click", validateForm);

function submitForm(event) {
    if((fullName.value.trim().length >= 4) && (validateEmail(email.value)) && (category.selectedIndex !== 0) && (message.value.trim().length >= 30)) {
        submitted.style.display = "block";
    } else {
        submitted.style.display = "none";
    }
}

submitButton.addEventListener("click", submitForm);

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);    
    
    return validEmail;
}