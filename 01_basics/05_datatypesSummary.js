// based on the data stored in memory and how to access it. It is divided into primitive and Non-primitive

//Primitive - CALL BY VALUE - which means when we try to copy the data we don't get the actual reference data instead it copies the data and allows us to edit.

// primitive - STRING, NUMBER, NULL, UNDEFINED, SYMBOL, BIGInt




const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemperature = null;
// let userEmail; / let userEmail = undefined;

//symbol

const id = Symbol('123');
const anotherId = Symbol('123') 

// const bigInt = 78679453653234556787n 


// Reference (Non-primitive) - Here the values get directly allocated in the memory.
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "sanjana",
    age: "20"
}

//function definition 
//function(){}   //  storing function in a variable 

const myFunction = function() {
    console.log("Hello world");
}

// // To know the type of datatype.
// console.log(typeof bigInt);             // returns undefined
// console.log(typeof myObj);              // returns object
// console.log(typeof outsideTemperature); // returns object
// console.log(typeof scoreValue)          // returns number
// console.log(typeof myFunction);         //returns function
// console.log(typeof myCar);              // returns undefined
// console.log(typeof undefined);          // returns undefined
// console.log(typeof [1,2,3]);            // returns object


//datatypes that contain values
//string, number, boolean, Object,Array, Date
console.log(typeof "sanjana");       // returns string
console.log(typeof 123);             //returns number
console.log(typeof true);             // returns boolean
console.log(typeof {name: "sanjana", age: 20});   //returns object
console.log(typeof [0,1,2,3,4,5,])                //returns object 

// 6 types of objects
// Object, Date, Array, String, Number,Boolean

// console.log(typeof new Date());   //returns object
// console.log(typeof "styh567");    //returns string
//console.log(typeof 897uyyh);    // returns Invalid    


// two datatypes that cannot contain values.
// let value = null
// console.log(typeof value);        // returns object
// let temp;
// console.log(typeof temp);          // returns undefined
