//input
let input1 = document.getElementById('i1');
let input2 = document.getElementById('i2');
let input3 = document.getElementById('i3');
let input4 = document.getElementById('i4');

//para
let paraForUserName = document.getElementById('p1');
let paraForUserName2 = document.getElementById('p11');
let paraForEmail = document.getElementById('p2');
let paraForEmail2 = document.getElementById('p21');
let paraForPassword = document.getElementById('p3');
let paraForPassword2 = document.getElementById('p31');
let paraForPassword3 = document.getElementById('p32');
let paraForPassword4 = document.getElementById('p33');
let paraForPassword5 = document.getElementById('p34');
let paraForPassword6 = document.getElementById('p35');
let paraForPassword7 = document.getElementById('p36');
let paraForConPassword = document.getElementById('p4');
let paraForConPassword2 = document.getElementById('p41');

//functions
let verifyUserName = () => {
    let username = input1.value.trim();

    if (username === "") {
        paraForUserName.innerText = "Write your name";
        paraForUserName.style.color = 'red';
        paraForUserName.innerText = 'Username should not contain uppercase letters';
        paraForUserName.style.color = 'red';
        paraForUserName2.innerText = 'Spaces are not allowed';
        paraForUserName2.style.color = 'red';
    }
    else if (username.match(/[A-Z]/) && username.includes(" ")) {
        paraForUserName.innerText = 'Username should not contain uppercase letters';
        paraForUserName.style.color = 'red';
        paraForUserName2.innerText = 'Spaces are not allowed';
        paraForUserName2.style.color = 'red';
    }
    else if (username.match(/[A-Z]/)) {
        paraForUserName.innerText = 'Username should not contain uppercase letters';
        paraForUserName.style.color = 'red';
        paraForUserName2.innerText = 'Spaces are not allowed';
        paraForUserName2.style.color = 'green';
    }
    else if (username.includes(" ")) {
        paraForUserName.innerText = 'Username should not contain uppercase letters';
        paraForUserName.style.color = 'green';
        paraForUserName2.innerText = 'Spaces are not allowed';
        paraForUserName2.style.color = 'red';
    }
    else {
        paraForUserName.innerText = 'Username should not contain uppercase letters';
        paraForUserName.style.color = 'green';
        paraForUserName2.innerText = 'Spaces are not allowed';
        paraForUserName2.style.color = 'green';
}
}


let verifyEmail = () => {
    paraForEmail.innerText = "";
    paraForEmail.style.color = 'black';

    const email = input2.value.trim();
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/; 
    
    if (email === "") {
        paraForEmail.innerText += "Write your email\n";
        paraForEmail.style.color = 'red';
    } else {
        paraForEmail.innerText += "Write your email\n";
        paraForEmail.style.color = 'green';
    }

    if (!emailCheck.test(email)) {
        paraForEmail.innerText += 'Invalid Email Format\n';
        paraForEmail.style.color = 'red';
    } else {
        paraForEmail.innerText += 'Invalid Email Format\n';
        paraForEmail.style.color = 'green';
    }
}


let verifyPassword = () => {
    if (input3.value.trim() === "") {
        paraForPassword.innerText += "Write your password\n";
        paraForPassword.style.color = 'red';
    } else {
        paraForPassword.innerText += "Write your password\n";
        paraForPassword.style.color = 'green';
    }

    if (input3.value.includes(" ")) {
        paraForPassword.innerText += 'Spaces are not allowed\n';
        paraForPassword2.style.color = 'red';
    } else {
        paraForPassword2.innerText += 'Spaces are not allowed\n';
        paraForPassword2.style.color = 'green';
    }

    if (input3.value.length < 8 || input3.value.length > 16) {
        paraForPassword3.innerText += 'Password must be between 8 and 16 characters\n';
        paraForPassword3.style.color = 'red';
    } else {
        paraForPassword3.innerText += 'Password must be between 8 and 16 characters\n';
        paraForPassword3.style.color = 'green';
    }

    if (!/[A-Z]/.test(input3.value)) {
        paraForPassword4.innerText += 'Password must contain at least one uppercase letter\n';
        paraForPassword4.style.color = 'red';
    } else {
        paraForPassword4.innerText += 'Password must contain at least one uppercase letter\n';
        paraForPassword4.style.color = 'green';
    }

    if (!/[a-z]/.test(input3.value)) {
        paraForPassword5.innerText += 'Password must contain at least one lowercase letter\n';
        paraForPassword5.style.color = 'red';
    } else {
        paraForPassword5.innerText += 'Password must contain at least one lowercase letter\n';
        paraForPassword5.style.color = 'green';
    }

    if (!/\d/.test(input3.value)) {
        paraForPassword6.innerText += 'Password must contain at least one digit\n';
        paraForPassword6.style.color = 'red';
    } else {
        paraForPassword6.innerText += 'Password must contain at least one digit\n';
        paraForPassword6.style.color = 'green';
    }

    if (!/[*&^%$#@!]/.test(input3.value)) {
        paraForPassword6.innerText += 'Password must contain at least one symbol\n';
        paraForPassword6.style.color = 'red';
    } else {
        paraForPassword6.innerText += 'Password must contain at least one symbol\n';
        paraForPassword6.style.color = 'green';
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
