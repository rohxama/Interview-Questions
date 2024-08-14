// Interview Questions


// 9- Write a javaScript function that returns a passed string in alphabetical order?

    function alphabetical(str){
        return str.split('').sort().join('')
    }
    console.log(alphabetical('Rohama'));
    


// 10- Write a javaScript function in which first letter of passed string would be capitalize?

    function capitalize(str){
        let words = str.split(' ').map(function(word){
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        return words.join(' ');
    }
    console.log(capitalize('how are you'));
    


    
