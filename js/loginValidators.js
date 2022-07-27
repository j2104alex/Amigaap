let email = document.getElementById("email");
let password = document.getElementById("password");


/**
 * Funcion para validar el campo email del formulario.
 * @param event 
 */
function validate(event){
    event.preventDefault()
    if (!validateEmail(email.value)){
        alert("El correo es incorrecto")
    }
    else {
        event.currentTarget.submit();
    }
}