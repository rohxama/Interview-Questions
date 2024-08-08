
// Interview Questions

// 7- How to reverse a funtion? (Second Method)

    function reverse(){
        let num = 34567;
        let rev = 0;
        while (num>0) {
            res = num%10; 
            rev = rev*10+res;
            num = Math.floor(num/10); 
        }
        return rev;
    }
    console.log(reverse());
    
// 8- Write a javaScript function that checks whether a passed string is palindrome or not?
    
    function check(str){
        let reverse = str.split('').reverse().join('');
        return reverse == str;
    }
    console.log(check('poop'));
    