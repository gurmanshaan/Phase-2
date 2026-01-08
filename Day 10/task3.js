//  Exercise 3 - First NON - Repeating character 


function firstNonRepeating(str) {
    let frequency = {};

    // First pass: count frequency
    for (let i = 0; i < str.length; i++) {
        let value = str[i];
        if (frequency[value]) {
            frequency[value]++;
        } else {
            frequency[value] = 1;
        }
    }

    // Second pass: find first non-repeating
    for (let i = 0; i < str.length; i++) {
        let value = str[i];
        if (frequency[value] === 1) {
            return value;
        }
    }

    return null;
}


let result = firstNonRepeating("aabbcdd")
console.log(result);
// "c"