// Exercise 3 - Sum of EVEN numbers only

function sumEven(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            sum = sum + arr[i];
        }
    }

    return sum;
}

let result = sumEven([1,2,3,4,5,6])
console.log(result);
// 12

// 1. Loop through array
// 2. Take sum = 0 and if array element is divided by 2 and remainder is 0 then add the array element to sum and return it

