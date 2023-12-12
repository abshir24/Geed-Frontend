export function capFirstLetter(string){
    if(string != undefined && string.length > 0){
        let newStr = string[0].toUpperCase()

        return newStr + string.slice(1)
    }
    
    return ""
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 