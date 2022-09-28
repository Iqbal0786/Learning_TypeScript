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
/*
  Variable Type declartion- To declare type of a variable  we have to use (:) after variable name and then define type. Example is given below

*/
var name = "Mohammad Iqbal"; // string variable 
var age = 21;
var role = "Full stack MERN developer";
//   name=1223 // throw an error that Type 'number' is not assignable to type 'string'
console.log("Hii my name is ".concat(name, ".\nI am ").concat(age, " year old.\nCurrently I am a ").concat(role));
