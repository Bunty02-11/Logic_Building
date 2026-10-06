// Divisible by 5 fuction 

function isDivisibleBy5(nums) {
    if(nums % 5 === 0){
        return "Number is Divisible by 5"
    } else{
        return "Not divisible By 5"
    }
}

console.log(isDivisibleBy5(5))
console.log(isDivisibleBy5(2))
