// Interview Questions - Day1

// 1- How to convert each word in paragraph reverse?

    let para = 'Hello I am Rohama Salfi';
    let reversed = para.split(' ').map(function(word){
        return word.split('').reverse().join('');
    })
    console.log(reversed.join(' '));  // olleH I ma amahoR iflaS
    
// 2- How to check is an object is an array or not?

    function checkArr(x){
        return Array.isArray(x);
    }
    console.log(checkArr({})); // false
    console.log(checkArr([])); // true
    


