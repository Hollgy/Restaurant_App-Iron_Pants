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

function isValidDishName(dishName) {
    if (dishName.length < 3) {
        return false;
    }

    const allowedChars = " abcdefghijklmnopqrstuvwxyzåäö";
    for (let i = 0; i < dishName.length; i++) {
        let c = dishName.charAt(i).toLowerCase();
        if (!allowedChars.includes(c)) {
            return false;
        }
    }
    return true;
}

function isValidPrice(price) {
    if (price.length < 1) {
        return false;
    }

    const allowedNumbers = "0123456789";
    for (let i = 0; i < price.length; i++) {
        let b = price.charAt(i);
        if (!allowedNumbers.includes(b)) {
            return false;
        }

        return true;
    }
}

function isValidId(id) {
    if (id.length < 3) {
        return false;
    }

    const allowedChars = "abcdefghijklmnopqrstuvwxyzåäö";
    for (let i = 0; i < id.length; i++) {
        let c = id.charAt(i).toLowerCase();
        if (!allowedChars.includes(c)) {
            return false;
        }
    }
    return true;
}

function isValidUrl(url) {
    if (url.length < 3) {
        return false;
    }
    // if (!dishName.includes(" ")) {
    //     return false;
    // }
    const allowedChars = ";,/?:@&=+$-_.!~*'()#abcdefghijklmnopqrstuvwxyzåäö0123456789";
    for (let i = 0; i < url.length; i++) {
        let c = url.charAt(i).toLowerCase();
        if (!allowedChars.includes(c)) {
            return false;
        }
    }
    return true;
}



export { isValidFullName, isValidPhonenumber, isValidPrice, isValidDishName, isValidId, isValidUrl };
