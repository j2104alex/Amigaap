let email = document.getElementById("email");
let password = document.getElementById("password");

function validate(event){
    event.preventDefault()
    if (!validateEmail(email.value)){
        alert("El correo es incorrecto")
    }
    else {
        event.currentTarget.submit();
    }
}