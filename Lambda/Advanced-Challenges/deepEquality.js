/* 

Write a function that, given two objects, returns whether or not the two are 
deeply equivalent - meaning the contents of the two objects are equal for all 
keys and sub-keys.

*/

function deepEquals(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

const johnA = {
    name: 'John',
    address: {
        line1: '321 Anytown',
        line2: 'Stoke-on-Trent'
    }
};

const johnB = {
    name: 'John',
    address: {
        line1: '321 Anytown',
        line2: 'Stoke-on-Trent'
    }
};

const johnC = {
    name: 'John Charles',
    address: {
        line1: '321 Anytown',
        line2: 'Stoke-on-Trent'
    }
};


console.log(deepEquals(johnA, johnB)); // true  
console.log(deepEquals(johnA, johnC)); // false
  