//check weather it upper case lower case digit or a special character

function checkCharacter(char){
    if(char >= "A" && char <= "Z"){
        return "UpperCase Letter"
    } else if(char >= "a" && char <= "z"){
        return "LowerCase Letter"
    } else if(char >= 0 && char <= 9){
        return "Its a digit"
    }else{
        return "Special Character"
    }
}

console.log(checkCharacter("a"))
console.log(checkCharacter("A"))
console.log(checkCharacter("%"))
