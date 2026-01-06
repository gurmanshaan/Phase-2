// Exercise 3 - Count Numbers GREATER than a given value

// Problem

function countGreaterThan(arr,value) {
    let counter = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > value ){
            counter = counter + 1;
        }
    }

    return counter;

}

let result = countGreaterThan([1,5,10,3,8],5)
console.log(result)
// 2

// 1. Loop through array
// 2. if array number is greater than the guven value then update the counter by 1 else not