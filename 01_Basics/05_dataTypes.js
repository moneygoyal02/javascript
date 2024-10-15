// PRIMITIVE (when you create a primitive value, you create a copy of that value)

// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// REFERANCE TYPE (NON PRIMITIVE) when you create a referance type, you create a reference to that value

// 1. Object
// 2. Array
// 3. Function

const aid= Symbol('hello');
const id = Symbol('hello');

console.log(aid === id); // false


const arr = [1,2,3,4,5];
let obj = {name: 'john', age: 23};

const myfunc = function(){
    console.log('hello');
}


// stack memory (primitives) when you create a primitive value, it is stored in stack memory
// heap memory (referance types) when you create a referance type, it is stored in heap memory

let name1 = "abc"
let name2 = name1;
name2 = "def";
console.log(name1); // abc


let obj1 = {name: 'john'};
let obj2 = obj1;
obj2.name = 'doe';
console.log(obj1.name); // doe
console.log(obj2.name); // doe


