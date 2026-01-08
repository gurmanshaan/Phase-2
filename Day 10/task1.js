// Exercise 1 - Frequency of numbers


function countFrequency(arr) {
    let frequency = {};
    for(let i =0; i < arr.length; i++){
       let value = arr[i];
        if(frequency[value]){
            frequency[value] = frequency[value] + 1;
        }
        else {
            frequency[value] = 1;
        }
    }

     return frequency;
}

//Problem
let result = countFrequency([1, 2, 2, 3, 1, 2]);
console.log(result)
// { 1: 2, 2: 3, 3: 1 }


