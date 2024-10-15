let score = "33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);      // 12
console.log(1 + "2");      // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0
