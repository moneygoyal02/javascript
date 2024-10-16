//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // 10
    
}



// console.log(a); // 300
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //  accesible because one is bigger than two and two is inside one
    }
    // console.log(website); // not accesible because website is inside two and there scope is limited to two only

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // hitesh youtube
    }
    // console.log(website); // not accesible 
}

// console.log(username); // not accesible 


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // here it will give 6 because below function is hoisted and it is available before the function is declared

function addone(num){
    return num + 1
}

// addone(5)  // here above function is hoisted and it is available before the function is declared



addTwo(5) // here it will give error because below function is not hoisted
const addTwo = function(num){
    return num + 2
}