// Interview Questions 

// 5- How to duplicate an array?

    function duplicate(arr){
        return arr.concat(arr);
    }
    console.log(duplicate([1,2,3,4,5])); // [1,2,3,4,5,1,2,3,4,5]
    
    
// 6- How to reverse a funtion?

    function reverse(a){
        return Number(a.toString().split('').reverse().join(''));
    }
    console.log(reverse(23)); // 32
    
