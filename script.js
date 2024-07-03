//input
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

//para
let paraForUserName = document.getElementById('paragraphForUsername');
let paraForUserName2 = document.getElementById('paragraphForUsername2');
let paraForUserName3 = document.getElementById('paragraphForUsername3');
let paraForEmail = document.getElementById('paragraphForEmail');
let paraForEmail2 = document.getElementById('paragraphForEmail2');
let paraForPassword = document.getElementById('paragraphForPassword');
let paraForPassword2 = document.getElementById('paragraphForPassword2');
let paraForPassword3 = document.getElementById('paragraphForPassword3');
let paraForPassword4 = document.getElementById('paragraphForPassword4');
let paraForPassword5 = document.getElementById('paragraphForPassword5');
let paraForPassword6 = document.getElementById('paragraphForPassword6');
let paraForPassword7 = document.getElementById('paragraphForPassword7');
let paraForConPassword = document.getElementById('paragraphForConfirmPassword');

//functions
let verifyUserName = () => {
    let username = input1.value;
    if (username === "") {
        paraForUserName.classList.add('dotRed');
        paraForUserName.classList.remove('dotGreen');
        paraForUserName2.classList.add('dotRed');
        paraForUserName2.classList.remove('dotGreen');
        paraForUserName3.classList.add('dotRed');
        paraForUserName3.classList.remove('dotGreen');
    }
    else if (username.match(/[A-Z]/) && username.includes(" ")) {
        paraForUserName.classList.add('dotRed');
        paraForUserName.classList.remove('dotGreen');
        paraForUserName2.classList.add('dotRed');
        paraForUserName2.classList.remove('dotGreen');
        paraForUserName.innerText = 'Username is not correct';
        paraForUserName.classList.add('dotRed');
        paraForUserName.classList.remove('dotGreen');
    }
    else if (username.match(/[A-Z]/)) {
        paraForUserName.innerText = 'Username is not correct';
        paraForUserName.classList.add('dotRed');
        paraForUserName.classList.remove('dotGreen');
        paraForUserName2.classList.add('dotRed');
        paraForUserName3.classList.add('dotGreen');
        paraForUserName3.classList.remove('dotRed');
    }
    else if (username.match(/[-]/)) {
        paraForUserName.style.display='none';
        paraForUserName2.innerHTML='Minus is not allowed';
        paraForUserName2.classList.add('dotRed');
        paraForUserName3.style.display='none';
    }
    else if (username.includes(" ")) {
        paraForUserName.innerText = 'Username is not correct';
        paraForUserName.classList.add('dotRed');
        paraForUserName.classList.remove('dotGreen');
        paraForUserName2.classList.add('dotGreen');
        paraForUserName2.classList.remove('dotRed');
        paraForUserName3.classList.add('dotRed');
        paraForUserName3.classList.remove('dotGreen');
    }
    else {
        paraForUserName3.classList.add('dotGreen');
        paraForUserName3.classList.remove('dotRed');
        paraForUserName2.classList.add('dotGreen');
        paraForUserName2.classList.remove('dotRed');
        paraForUserName.innerText = 'Username is correct';
        paraForUserName.classList.add('dotGreen');
        paraForUserName.classList.remove('dotRed');
}
}


let verifyEmail = () => {

    const email = input2.value;
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/; 
    
    if (email === "") {
        paraForEmail.classList.add('dotRed');
        paraForEmail.classList.remove('dotGreen');
    } else {
        paraForEmail.style.display = 'none';
    }

    if (!emailCheck.test(email)) {
        paraForEmail2.classList.add('dotRed');
        paraForEmail2.classList.remove('dotGreen');
    } else {
        paraForEmail2.innerText = 'Email is valid'
        paraForEmail2.classList.add('dotGreen');
        paraForEmail2.classList.remove('dotRed');
    }
}


let verifyPassword = () => {
    
    if (input3.value === "") {
        paraForPassword.classList.add('dotRed');
        paraForPassword.classList.remove('dotGreen');
    } else {
        paraForPassword.style.display = 'none';
    }

    if (input3.value.includes(" ")) {
        paraForPassword2.classList.remove('dotGreen');
        paraForPassword2.classList.add('dotRed');
    } 
    else if(input3.value === ""){
        paraForPassword2.classList.remove('dotGreen');
        paraForPassword2.classList.add('dotRed');
    }
    else {
        paraForPassword2.classList.remove('dotRed');
        paraForPassword2.classList.add('dotGreen');
    }

    if (input3.value.length < 8 || input3.value.length > 16) {
        paraForPassword3.classList.remove('dotGreen');
        paraForPassword3.classList.add('dotRed');
    } else {
        paraForPassword3.classList.remove('dotRed');
        paraForPassword3.classList.add('dotGreen');
    }

    if (!/[A-Z]/.test(input3.value)) {
        paraForPassword4.classList.remove('dotGreen');
        paraForPassword4.classList.add('dotRed');
    } else {
        paraForPassword4.classList.remove('dotRed');
        paraForPassword4.classList.add('dotGreen');
    }

    if (!/[a-z]/.test(input3.value)) {
        paraForPassword5.classList.remove('dotGreen');
        paraForPassword5.classList.add('dotRed');
    } else {
        paraForPassword5.classList.remove('dotRed');
        paraForPassword5.classList.add('dotGreen');
    }

    if (!/\d/.test(input3.value)) {
        paraForPassword6.classList.remove('dotGreen');
        paraForPassword6.classList.add('dotRed');
    } else {
        paraForPassword6.classList.remove('dotRed');
        paraForPassword6.classList.add('dotGreen');
    }

    if (!/[*&^%$#@!]/.test(input3.value)) {
        paraForPassword7.classList.remove('dotGreen');
        paraForPassword7.classList.add('dotRed');
    } else {
        paraForPassword7.classList.remove('dotRed');
        paraForPassword7.classList.add('dotGreen');
    }
}

let confirmPassword = () => {
    if (input4.value === "") {
        paraForConPassword.innerText = "Confirm your password";
        paraForConPassword.classList.add('dotRed');
        paraForConPassword.classList.remove('dotGreen');
    } else if (input4.value !== input3.value) {
        paraForConPassword.innerText = 'Passwords do not match';
        paraForConPassword.classList.add('dotRed');
        paraForConPassword.classList.remove('dotGreen');
    } else {
        paraForConPassword.innerText = 'Password match';
        paraForConPassword.classList.add('dotGreen');
        paraForConPassword.classList.remove('dotRed');
    }
}

// Form submitting
let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    verifyUserName();
    verifyEmail();
    verifyPassword();
    confirmPassword();
});


// Keypress for inputs
let inputForUsername = document.getElementById('input1').addEventListener('input', () => {
        verifyUserName();
    });
    let inputForEmail = document.getElementById('input2').addEventListener('input', () => {
        verifyEmail();
    });
    let inputForPassword = document.getElementById('input3').addEventListener('input', () => {
        verifyPassword();
    });
    let inputForConfirmPassword = document.getElementById('input4').addEventListener('input', () => {
        confirmPassword();
    });
