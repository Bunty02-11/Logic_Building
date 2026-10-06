// Its a leap Yer or Not

function leapYear(years){
    if((years % 4 === 0 && years % 100 !== 0 ) || years % 400 === 0 ){
        return "Its a Leap Year"
    } else{
        return "Not a Leap Year"
    }
}

console.log(leapYear(2025))
console.log(leapYear(2024))
console.log(leapYear(2000))
