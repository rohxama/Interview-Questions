// Interview Questions

// 11- Write a JavaScript program ro check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

function checkConditions(num1, num2) {
    return num1 === 100 || num2 === 100 || num1 + num2 === 100;
}

console.log(checkConditions(12, 45)); // False
console.log(checkConditions(100, 45)); // True


// 12- Write a JavaScript function that return the extension of file.

function getFileExtension(fileName) {
    if (fileName.includes('.')) {
        return fileName.split('.').pop();
    } else {
        return ""
    }
}
console.log(getFileExtension('document.pdf')); // pdf
console.log(getFileExtension('index.html')); // html
console.log(getFileExtension('style')); // ''