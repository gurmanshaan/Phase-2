// Exercise 2 - Character frequency in a string

function charFrequency (str) {
   let frequency = {};
    for(let i =0; i < str.length; i++){
       let value = str[i];
        if(frequency[value]){
            frequency[value] = frequency[value] + 1;
        }
        else {
            frequency[value] = 1;
        }
    }

     return frequency;
}


let result = charFrequency("aabbbc");
console.log(result);
// { a: 2, b: 3, c: 1 }