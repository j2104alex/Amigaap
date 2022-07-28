function validateMinLength(word, minLength) {
    if (word.length >= minLength) {
        return true;
    }
    else {
        return false;
    }
  }
  function validateMaxLenght(word, maxLength) {
    if (word.length < maxLength) {
        return true;
    }
    else {
        return false;
    }
  }
  function validateEmail(email) {
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    if (email.match(validRegex) != null) {
        return true;
    } else {
        return false;
    }
  }
  function validatePassword(password) {
    if (validateMinLength(password, 8)) {
        let validRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$";
        if (password.match(validRegex) != null) {
            return true;
        } else {
            return false;
            console.log(password);
        }
    }
    return false;
  }
  function onlyLetters(word) {
    let validRegex = "[0-9]";
    if (word.match(validRegex) == null) {
        return true;
    }
    else {
        return false;
    }
  }