function isStrongPassword(password){
    const numLength = password.length > 6;

    const hasLetter = /[a-zA-Z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    return numLength && hasLetter && hasNumber;
}

let password = 'sankar123';

console.log(isStrongPassword(password));