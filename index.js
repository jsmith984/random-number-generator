function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, incldueSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvqxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += incldueSymbols ? symbolChars : "";



    if(length <= 0) {
        return "Password length must be at least 1 character";
    }
    if(allowedChars.length === 0) {
        return "At least one set of characters needs to be selected"
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const incldueSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  incldueSymbols);

console.log(`Generated password: ${password}`);
