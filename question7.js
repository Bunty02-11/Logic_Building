// find the largest number in three elements 

function findLargest(a,b,c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
}

console.log(findLargest(10,2,23))

console.log(findLargest(-10,-2,0))
