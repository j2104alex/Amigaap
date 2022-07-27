console.log(validatePassword("A2F4j69"));

/**
 * Funcion para validar los caracteres minimos de entra en input.
 * @param {String} word
 * @param {Number} minLength
 * @returns Booelan
 */
function validateMinLength(word, minLength) {
  return word.length > minLength ? true : false;
}

//Problema detectado es 'length' no 'length'
/**
 * Funcion para validar los caracteres maximos de entra en input.
 * @param {String} word
 * @param {Number} maxLength
 * @returns Boolean
 */
function validateMaxLength(word, maxLength) {
  //word.length
  return word.length < maxLength ? true : false;
}

/**
 * Funcion para validar el email de entra en input.
 * @param {String} email
 * @returns Boolean
 */
function validateEmail(email) {
  let validRegex =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  return email.match(validRegex) ? true : false;
}

/**
 * Funcion para validar la cantidad de caracteres minimos en el input password.
 * @param {String} password
 * @returns Boolean
 */
function validatePassword(password) {
  if (validateMinLength(password, 8)) {
    let validRegex = "^[a-zA-Z0-9!·$%&]+$";
    if (password.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }else{ 
    return false;
  }
}

/**
 * Function para validar campos de solo letras.
 * @param {String} word
 * @returns Boolean
 */
function onlyLetters(word) {
  let validRegex = "^[a-zA-Z]+$";
  return word.match(validRegex) ? true : false;
}

/**
 * Function para validar campos de solo numeros.
 * @param {String} word
 * @returns Boolean
 */
function onlyNumbers(word) {
  let validRegex = "^[0-9]+$";
  return word.match(validRegex) ? true : false;
}