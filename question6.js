// largest number between two numbers

function findLargest(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

console.log(findLargest(10,2))
console.log(findLargest(-10,-2))
