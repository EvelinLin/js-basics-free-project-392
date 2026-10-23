// BEGIN
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SPECIAL = "!@#$%^&*";

const nextRandom = (number) => (16807 * number) % 2147483647;

function generatePassword(length, seed, options = {}) {
  const { useUppercase = true, useDigits = true, useSpecial = false} = options;

  let alphabet = LOWERCASE;
  if (useUppercase) {
    alphabet = alphabet + UPPERCASE;
  }
  if (useDigits) {
    alphabet = alphabet + DIGITS;
  }
  if (useSpecial) {
    alphabet = alphabet + SPECIAL;
  }
  
  const len = alphabet.length;
  let current = seed;
  let result = '';

  for (let i = 0; i < length; i++) {
    current = nextRandom(current);
    const index = current % len;
    result = result + alphabet[index];
  }
  return result;
 
}

function checkPassword(password) {
    let resultCheck = 0;
    if (password.length >= 8) {
        resultCheck++;
    }

    let hasLowerCase = false;
    for (const char of password) {
        if(LOWERCASE.includes(char)) {
            hasLowerCase = true;
            break;
        }
    }
    if (hasLowerCase) {
        resultCheck++;
    }

    let hasUpperCase = false;
    for (const char of password) {
        if(UPPERCASE.includes(char)) {
            hasUpperCase = true;
            break;
        }
    }
    if (hasUpperCase) {
        resultCheck++;
    }

    let hasDigits = false;
    for (const char of password) {
        if(DIGITS.includes(char)) {
            hasDigits = true;
            break;
        }
    }
    if (hasDigits) {
        resultCheck++;
    }

    let hasSpecial = false;
    for (const char of password) {
        if(SPECIAL.includes(char)) {
            hasSpecial  = true;
            break;
        }
    }
    if (hasSpecial ) {
        resultCheck++;
    }

    let verdict;
    if (resultCheck <= 2) {
        verdict = 'Слабый';
    } else if (resultCheck === 3) {
        verdict = 'Средний';
    } else if (resultCheck === 4) {
        verdict = 'Надёжный';
    } else if (resultCheck === 5) {
        verdict = 'Очень надёжный';
    }

    return `${verdict} пароль (оценка ${resultCheck} из 5)`;
}
// END

export { generatePassword, checkPassword };
