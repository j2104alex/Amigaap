let username = document.getElementById("username");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let checkBox = document.getElementById("cbox1");

/**
 * Funcion para retornar los mensajes de validacion.
 * @param {EVENT} event 
 */
function validate(event){
    event.preventDefault()
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
        alert("Ingrese una contraseña de mínimo 8 caracteres");
    }
    else if (!validatePassword(confirmPassword.value)){
        alert("Ingrese una contraseña de mínimo 8 caracteres");
    }
    else  if (password.value!=confirmPassword.value){
        alert("La contraseña no coincide");
    }
    else if (!checkBox.value){
        alert("Por favor acepte los términos y condiciones");
    }
}


