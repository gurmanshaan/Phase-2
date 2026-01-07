// Exercise 1 - Sum of all elements

function sumArray(arr){
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }

    return sum;

}

let result = sumArray([1,2,3,4]) 
console.log(result);
// 10


// 1. Loop through array
// 2. Take a variable sum = 0 as why we are getting the sum = 0 because anything add to 0 is the number added itself 
// 3. After each iteration we will add the numbers to sum and return the sum.