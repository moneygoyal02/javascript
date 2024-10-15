let mydate = new Date();

console.log(mydate); // 2021-07-07T06:00:00.000Z
console.log(mydate.toString()); // Wed Jul 07 2021 11:30:00 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); // Wed Jul 07 2021
console.log(mydate.toTimeString()); // 11:30:00 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString()); // 7/7/2021, 11:30:00 AM

const cretedate = new Date(2023,0,23,5,3);

console.log(cretedate); // 2023-01-22T23:33:00.000Z
console.log(cretedate.toString()); // Tue Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
console.log(cretedate.toDateString()); // Tue Jan 23 2023
console.log(cretedate.toTimeString()); // 05:03:00 GMT+0530 (India Standard Time)
console.log(cretedate.toLocaleString()); // 1/23/2023, 5:03:00 AM


 const mycreatedDate = new Date('2021-07-07');

 let mytimestamp = Date.now(); // 1625656200000
 console.log(mycreatedDate.getTime()); // 1625656200000
 