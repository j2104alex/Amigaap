let username = document.getElementById("username");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let checkBox = document.getElementById("cbox1");


/**
 * Funcion para retornar los mensajes de validacion.
 * @param {event} event 
 */
function validateRegister(event){
    event.preventDefault();
    if (!onlyLetters(username.value)){
        alert("El nombre debe estar conformado solo por letras");
        return;
    }
    else if (!onlyLetters(lastname.value)){
        alert("El apellido debe estar conformado solo por letras");
        return;
    }
    else if (!validateEmail(email.value)){
        alert("Ingrese un correo válido")
        return;
    }
    else if (!validatePassword(password.value)){

        alert("Ingrese una contraseña de mínimo 8 caracteres");
        return;
    }
    else if (!validatePassword(confirmPassword.value)){
        alert("1-Ingrese una contraseña de mínimo 8 caracteres conformada por letras y numeros");
        return;

        
    }

    else  if (password.value!=confirmPassword.value){
        alert("La contraseña no coincide");
        return;
    }
    else if (!checkBox.checked){
        alert("Por favor acepte los términos y condiciones");
        
    }else {
        event.currentTarget.submit();
    }
}


