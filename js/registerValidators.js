let username = document.getElementById("username");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let checkBox = document.getElementById("cbox1");

function validate(event){
    event.preventDefault()
    console.log(checkBox.checked);
    if (!onlyLetters(username.value)){
        alert("El nombre debe estar conformado solo por letras");
    }
    else if (!onlyLetters(lastname.value)){
        alert("El apellido debe estar conformado solo por letras");
    }
    else if (!validateEmail(email.value)){
        alert("Ingrese un correo válido")
    }
    else if (!validatePassword(password.value)){
        alert("1-Ingrese una contraseña de mínimo 8 caracteres conformada por letras y numeros");
    }
    else if (!validatePassword(confirmPassword.value)){
        alert("2-Ingrese una contraseña de mínimo 8 caracteres conformada por letras y numeros");
    }
    else  if (password.value!=confirmPassword.value){
        alert("La contraseña no coincide");
    }
    else if (!checkBox.checked){
        alert("Por favor acepte los términos y condiciones");
    }
    else {
        event.currentTarget.submit();
    }
}


