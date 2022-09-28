export { }

// in typeScript once a variable is initilized with var or let it can not be reassign to any other data types  like the given example 


let message = "Hello World";
//  message= 12  this will throw an error that cant assign to a string 
console.log(message);


let arr = [1, 2, 3, 4];
let obj = {
    id: "iqbal123"
}

// arr.push("string") 
// obj.id=123

// both above operation can not be performed in ts because it once an array or object is defined with a data type value it can not be replace to any other type values

arr.push(20)
obj.id = "amar123"
console.log(`Array : ${arr}\nObj : ${obj.id}`)


// IMPORTANT - in case of object if we want to over ride object with same key structure the it allowed us to do like given

obj={
    id:"samrendra"
}

// but if we  want to add some extra key or change the type of key the it will throw an error like given
 
// obj={    // overall this code will throw error 
//     // id:12,   error will occure
//     // name:"sam"  error will occure
// }

// EXPLICIT TYPE CONVERSION 

/*
  Variable Type declartion- To declare type of a variable  we have to use (:) after variable name and then define type. Example is given below

*/

let name: string = "Mohammad Iqbal" // string variable 
let age: number = 21;
let role: string = "Full stack MERN developer";
let passout:boolean=true;

//   name=1223 // throw an error that Type 'number' is not assignable to type 'string'
console.log(`Hii my name is ${name}.\nI am ${age} year old.\nCurrently I am a ${role}`)



