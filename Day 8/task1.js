// Exercise 1 - Find MAX number in the array

// Problem

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}


let result = findMax([3,7,2,9,4])
console.log(result);
// 9

// 1. Loop through array
// 2. First number is max 
// 3. Loop through array and compare the numbers with max if number is greater than max , then replace the number with max and going on
// 4. if number is not greater than max then we will not replace the value of max.