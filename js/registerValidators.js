let username = document.getElementById("username");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let checkBox = document.getElementById("cbox1");


/**
 * Function that returns the validation messages.
 * @param {event} event 
 */
function validateRegister(event){
    event.preventDefault();
    if (!onlyLetters(username.value)){
        alert("El nombre debe estar confrmado solo por letras");
        return;
    }
    else if (username.value == ""){
        alert("Debe ingresar un nombre");
        return;
    }
    else if (!onlyLetters(lastname.value)){
        alert("El apellido debe estar conformado solo por letras");
        return;
    }
    else if (lastname.value == ""){
        alert("Debe ingresar un apellido");
        return;
    }
    else if (!validateEmail(email.value)){
        alert("Ingrese un correo válido")
        return;
    }
    else if (email.value == ""){
        alert("Debe ingresar un correo electrónico");
        return;
    }
    else if (!validatePassword(password.value)){

        alert("Ingrese una contraseña que contenga mayuscuales, minusculas y numeros de minimo 8 caracteres");
        return;
    }
    else if (!validatePassword(confirmPassword.value)){
        alert("Ingrese una contraseña que contenga mayuscuales, minusculas y numeros de minimo 8 caracteres");
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


