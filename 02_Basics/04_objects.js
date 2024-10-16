// const tinderUser = new Object()  // singleton object
const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // if we not write {} then all values go to obj1 in this case {} is target and obj1, obj2, obj4 are sources

const obj3 = {...obj1, ...obj2}
// console.log(obj3); 


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]  // array of objects

users[1].email 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); \\ return array of keys
// console.log(Object.values(tinderUser)); \\ return array of values
// console.log(Object.entries(tinderUser)); \\ return array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]