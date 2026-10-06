// Check temperture 

function checkTemperature(temp){
    if(temp >= 30){
        return "Hot"
    } else if(temp >= 15 && temp <= 29){
        return "warm"
    }else{
        return "cold"
    }
}

console.log(checkTemperature(100))

console.log(checkTemperature(20))

console.log(checkTemperature(0))
