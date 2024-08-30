// Interview Questions

// 15 - Make many object in array and remove all the objects that have'nt gender male

function abc(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].gender === 'male') {
            result.push(arr[i]);
        }
    }
    return result;
}

let info = [
    { name: 'rohama', gender: 'female' },
    { name: 'fatima', gender: 'female' },
    { name: 'ahmad', gender: 'male' },
    { name: 'zubair', gender: 'male' }
];

const filterMembers = abc(info);
console.log(filterMembers);




//16- How to clone an array

function clone(arr) {
    return [...arr];
}
let clonedArr = clone([1, 2, 3, 4]);
console.log(clonedArr);