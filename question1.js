// Check weather Number is Positive or Negative

function checkNumber(nums) {
    if (nums > 0) {
        return "Positive"
    } else if (nums < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
}

console.log(checkNumber(0));
console.log(checkNumber(-3));
console.log(checkNumber(0));
