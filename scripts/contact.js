// refer to question 4 before development starts for scope document

const firstField = document.getElementById("firstName");
const lastField  = document.getElementById("lastName");
const phoneField = document.getElementById("phone");
const emailField = document.getElementById("email");

const firstError = document.getElementById("firstNameError");
const lastError  = document.getElementById("lastNameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

const namePattern  = /{1,63}/;
const phonePattern = /\d{3}[\s-.]\d{3}[\s-.]\d{4}/;
const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

document.getElementById("submitContact").onclick = () => {
    evaluateField(namePattern,  firstField, firstError);
    evaluateField(namePattern,  lastField,  lastError);
    evaluateField(phonePattern, phoneField, phoneError);
    evaluateField(emailPattern, emailField, emailError);
}

/**
 * Evaluates fieldInput against pattern, and displays fieldError if false
 * @param {HTMLElement} fieldInput 
 * @param {HTMLElement} fieldError 
 * @param {RegExp} pattern 
 */
function evaluateField(pattern, fieldInput, fieldError) {
    if (pattern.test(fieldInput.value)) {
        fieldError.style.display = "none";
    } else {
        fieldError.style.display = "block";
    }
}
