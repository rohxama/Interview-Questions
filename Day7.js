// Interview Questions


// 13 - Write a function to get the number of occurences of each letter in string

function getNumberByOccurences(str) {
    const letterCheck = {};

    for (let char of str) {

        if (letterCheck[char]) {
            letterCheck[char]++;
        } else {
            letterCheck[char] = 1;
        }
    }
    return letterCheck;
}
console.log(getNumberByOccurences('rohama')); // {r:`,o:1,h:1,m:1,a:2}



// 14- Loop an array and sum it
let arr = [1, 2, 3, 4];
let sum = 0;
arr.forEach(function(elem) {
    sum = sum + elem;
})
console.log(sum); //10