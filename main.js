"use strict";
exports.__esModule = true;
// in typeScript once a variable is initilized with var or let it can not be reassign to any other data types  like the given example 
var message = "Hello World";
//  message= 12  this will throw an error that cant assign to a string 
console.log(message);
var arr = [1, 2, 3, 4];
var obj = {
    id: "iqbal123"
};
// arr.push("string") 
// obj.id=123
// both above operation can not be performed in ts because it once an array or object is defined with a data type value it can not be replace to any other type values
arr.push(20);
obj.id = "amar123";
console.log("Array : ".concat(arr, "\nObj : ").concat(obj.id));
// IMPORTANT - in case of object if we want to over ride object with same key structure the it allowed us to do like given
obj = {
    id: "samrendra"
};
// but if we  want to add some extra key or change the type of key the it will throw an error like given
// obj={    // overall this code will throw error 
//     // id:12,   error will occure
//     // name:"sam"  error will occure
// }
// EXPLICIT TYPE CONVERSION 
/*
  Variable Type declartion- To declare type of a variable  we have to use (:) after variable name and then define type. Example is given below

*/
var name = "Mohammad Iqbal"; // string variable 
var age = 21;
var role = "Full stack MERN developer";
var passout = true;
//   name=1223 // throw an error that Type 'number' is not assignable to type 'string'
console.log("Hii my name is ".concat(name, ".\nI am ").concat(age, " year old.\nCurrently I am a ").concat(role));
// arrays 
// let nameArr:string[];
//  nameArr.push("iqbal")  throw an error  so to resolve initilized an empty arr
var nameArray = [];
nameArray.push("iqbal");
// Union types
// if we want to declare an array with multiple types values like string , number , object  etc then we can use  union types. example is given 
var mixedArr = [];
mixedArr.push(20);
mixedArr.push("Hello");
mixedArr.push({ name: "object value" });
// variable can also have union type declartion
var id;
id = "id123";
id = 1234;
// object type declaration
var Object; // this type declartion  allow to create object type (array,object etc)
Object = [1, 2, 3, 4];
Object = {
    name: "aman"
};
// Function Declarations 
// first way 
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.reduce(function (acc, e) { return acc + e; }, 0));
}
add(10, 10, 20, 30, 50);
// second way 
var addNumbers;
addNumbers = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return c ? a + b + c : a + b;
};
// to make parameters optional we use ? after parameter like c?:number is optional
console.log(addNumbers(50, 50, 100));
var userId; // direct way 
var userId2; // using type Aliases
// Function Signature
