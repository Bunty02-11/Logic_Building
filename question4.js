// Divisible by 3 and 5 both

function isDivisibleBy3and5(nums) {
    if(nums % 3 === 0 && nums % 5 === 0){
        return "Number is Divisible by 3 and 5"
    } else{
        return "Not divisible By both"
    }
}

console.log(isDivisibleBy3and5(15))
console.log(isDivisibleBy3and5(2))
