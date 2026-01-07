// Exercise 2 - Average of Elements

function averageArray(arr) {
    let sum = 0;

    for(let i=0;i<arr.length; i++){
        sum = sum + arr[i]
    }
    
    let average = sum / arr.length;

    return average;
}

let result = averageArray([2,4,6,8])
console.log(result);
// 5

// 1. Loop through array
// 2. Take sum = 0 and add each element to sum after each iteration 
// 3. Divide the sum by array length and return it;