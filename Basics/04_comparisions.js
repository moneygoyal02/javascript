console.log("2" > 1); // true
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// in js equality and comparison both works differently
// comparison convert null to a number, treating it as 0
// that's why null >= 0 is true and null > 0 is false

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false


