//input
let input1 = document.getElementById('i1');
let input2 = document.getElementById('i2');
let input3 = document.getElementById('i3');
let input4 = document.getElementById('i4');

//para
let paraForUserName = document.getElementById('p1');
let paraForEmail = document.getElementById('p2');
let paraForPassword = document.getElementById('p3');
let paraForConPassword = document.getElementById('p4');

//functions
let verifyUserName = () => {
    if (input1.value.trim() === "") {
        paraForUserName.innerText = "Write your name";
        paraForUserName.style.color = 'red'
    } else if (input1.value.match(/[A-Z]/)) {
        paraForUserName.innerText = 'Username should not contain uppercase letters';
        paraForUserName.style.color = 'red'
    } else if (input1.value.includes(" ")) {
        paraForUserName.innerText = 'Spaces are not allowed';
         paraForUserName.style.color = 'red'
    } else {
        paraForUserName.innerText = 'Username is correct';
        paraForUserName.style.color = 'green'
    }
}

let verifyEmail = () => {
    if (input2.value.trim() === "") {
        paraForEmail.innerText = "Write your email";
         paraForEmail.style.color = 'red'
    } else if (input2.value.length < 10 || input2.value.length > 20) {
        paraForEmail.innerText = 'Invalid Email';
        paraForEmail.style.color = 'red'
    } else {
        paraForEmail.innerText = "Email is correct";
         paraForEmail.style.color = 'green'
    }
}

let verifyPassword = () => {
    if (input3.value.trim() === "") {
        paraForPassword.innerText = "Write your password";
        paraForPassword.style.color = 'red'
    } else if (input3.value.includes(" ")) {
        paraForPassword.innerText = 'Spaces are not allowed';
        paraForPassword.style.color = 'red'
    } else if (input3.value.length < 8) {
        paraForPassword.innerText = "Password must be at least 8 characters";
        paraForPassword.style.color = 'red'
    } else if (input3.value.length > 16) {
        paraForPassword.innerText = 'Password must not exceed 16 characters';
        paraForPassword.style.color = 'red'
    } else if (!/[A-Z]/.test(input3.value)) {
        paraForPassword.innerText = "Password must contain at least one uppercase letter";
        paraForPassword.style.color = 'red'
    }
    else if (!/[a-z]/.test(input3.value)) {
        paraForPassword.innerText = "Password must contain at least one lowercase letter";
        paraForPassword.style.color = 'red'
    } else if (!/\d/.test(input3.value)) {
        paraForPassword.innerText = 'Password must contain at least one digit';
        paraForPassword.style.color = 'red'
    } else if (!/[*&^%$#@!]/.test(input3.value)) {
        paraForPassword.innerText = 'Password must contain at least one symbol';
        paraForPassword.style.color = 'red'
    } else {
        paraForPassword.innerText = 'Password is correct';
         paraForPassword.style.color = 'green'
    }
}

let confirmPassword = () => {
    if (input4.value.trim() === "") {
        paraForConPassword.innerText = "Confirm your password";
        paraForConPassword.style.color = 'red'
    } else if (input4.value !== input3.value) {
        paraForConPassword.innerText = 'Passwords do not match';
        paraForConPassword.style.color = 'red'
    } else {
        paraForConPassword.innerText = 'Password match';
         paraForConPassword.style.color = 'green'
    }
}

// Form submitting
let submit = document.getElementById("sub");
submit.addEventListener('click', (e) => {
    e.preventDefault(); 
    verifyUserName();
    verifyEmail();
    verifyPassword();
    confirmPassword();
});
