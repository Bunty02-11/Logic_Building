// cehck vowels

function cehckVowel(char){
    char = char.toLowerCase()
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        return "Its a Vowel"
    }else{
        return "Its consonant"
    }
}

console.log(cehckVowel("E"))
console.log(cehckVowel("f"))
console.log(cehckVowel("O"))

