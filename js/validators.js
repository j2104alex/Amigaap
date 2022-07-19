function validateMinLenght(word, minLenght) {
    if (word.lenght > minLenght) {
        return true;
    }
    else {
        return false;
    }
}
function validateMaxLenght(word, maxLenght) {
    if (word.lenght < maxLenght) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(email) {
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}
function validatePassword(password) {
    if (validateMinLenght(password, 8)) {
        let validRegex = "^[a-z]+$";
        if (password.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}
function onlyLetters(word) {
    let validRegex = "^[a-zA-Z]+$";
    if (word.match(validRegex)){
        return true;
    }
    else {
        return false;
    }
    return false;
}