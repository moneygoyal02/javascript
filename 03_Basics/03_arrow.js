const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // here this will refer to user object and output will be {username: "hitesh", price: 999, welcomeMessage: ƒ}
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // undefined
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return no need to write return keyword

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return no need to write return keyword

const addTwo = (num1, num2) => ({username: "hitesh"}) 


console.log(addTwo(3, 4))  // undefined if  {username: "hitesh"} this is not in () because it will consider {} as block of code


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()