const name1 = "john";
const num = 50

console.log(name1 + num); // john50

console.log(`${name1} ${num}`); // john 50

const gname = new String('john-abraham');

console.log(gname); // [String: 'john']
console.log(typeof gname); // object


const newstr = gname.substring(0,4);
console.log(newstr); // john

const newstr1 = gname.slice(-8,4)
console.log(newstr1); // john

const gname1 = "   namene    "
console.log(gname1.trim()); // namene
console.log(gname1); //   namene

const url = "https://www.google%20moneygoyal.com";

console.log(url.replace('%20', '-')); // https://www.google-moneygoyal.com

console.log(url.includes('google')); // true
console.log(url.includes('goglll')); // false



console.log(gname.split('-')); // [ 'john', 'abraham' ]

