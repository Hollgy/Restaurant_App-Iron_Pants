function isValidFullName(fullName) {
    if (fullName.length < 5) {
        return false;
    }
    if (!fullName.includes(" ")) {
        return false;
    }
    const allowedChars = " abcdefghijklmnopqrstuvwxyzåäö";
    for (let i = 0; i < fullName.length; i++) {
        let c = fullName.charAt(i).toLowerCase();
        if (!allowedChars.includes(c)) {
            return false;
        }
    }
    return true;
}

function isValidPhonenumber(phoneNumber) {
    if (phoneNumber.length < 10) {
        return false;
    }

    const allowedNumbers = " 0123456789";
    for (let i = 0; i < phoneNumber.length; i++) {
        let b = phoneNumber.charAt(i);
        if (!allowedNumbers.includes(b)) {
            return false;
        }
        
        return true;
    }
}

export { isValidFullName, isValidPhonenumber };
