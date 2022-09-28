export {}

// in typeScript once a variable is initilized with var or let it can not be reassign to any other data types  like the given example 
let message="Hello World";
//  message= 12  this will throw an error that cant assign to a string 
console.log(message);

/*
  Variable Type declartion- To declare type of a variable  we have to use (:) after variable name and then define type. Example is given below

*/

 let name : string= "Mohammad Iqbal" // string variable 
 let age:number=21;
 let role:string="Full stack MERN developer";
 
//   name=1223 // throw an error that Type 'number' is not assignable to type 'string'
console.log(`Hii my name is ${name}.\nI am ${age} year old.\nCurrently I am a ${role}`)