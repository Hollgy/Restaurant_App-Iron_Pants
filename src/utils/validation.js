function isValidFullName(fullName){
    if(fullName.length < 5){
        return false;
    }
    if(!fullName.includes(' ') ){
        return false
    }
    const allowedChars = ' abcdefghijklmnopqrstuvwxyzåäö'
    for(let i = 0; i < fullName.length; i++){
        let c = fullName.charAt(i).toLowerCase()
        if(!allowedChars.includes(c)){
            return false
        }

    }
    return true
}

export {isValidFullName}