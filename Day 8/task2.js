// Exercise 2 - Find MIN number in the array

// Problem

function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}


let result = findMin([3,7,2,9,4])
console.log(result);
// 2

// 1. Loop through array
// 2. First number is min 
// 3. Loop through array and compare the numbers with min if number is smaller than min , then replace the number with min and going on
// 4. if number is not smaller than min then we will not replace the value of min.