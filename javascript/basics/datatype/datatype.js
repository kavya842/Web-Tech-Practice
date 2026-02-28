//! Primitive data types in JavaScript !//
// let a=20;
// let A="hello";
// let b='hello';
// let c=true;
// let d=null;   
// let e=undefined;
// let f=Symbol("hello");
// let g=BigInt(1234567890123456789012345678901234567890);     
// console.log(typeof a);  o/p:- number   (it will return number for both integer and floating point numbers in JavaScript)
// console.log(typeof A);   o/p:-string   (both double quotes and single quotes are used to represent string in JavaScript)
// console.log(typeof b);   o/p:-string   (both double quotes and single quotes are used to represent string in JavaScript)
// console.log(typeof c);   o/p:-boolean  (it will return true or false based on the value of the variable)
// console.log(typeof d);   o/p :- object  (it is a bug in JavaScript that it returns object for null)
// console.log(typeof e);    o/p:-undefined (it means value is not assigned to the variable)
// console.log(typeof f);   o/p:-symbol  (it will return unique value every time we create a symbol)
// console.log(typeof g);   o/p:-bigint   (it is used to represent large integers that are beyond the range of number data type in JavaScript)


//! Non-primitive data types in JavaScript !//
// let arr=[1,2,3,4,5];
// let obj={
//     name:"kavya",
//     age:21,
//     city:"bangalore"
// }
// function add(a,b){
//     return a+b;
// }
// console.log(typeof arr);   o/p:-object
// console.log(typeof obj);   o/p:-object
// console.log(typeof add);   o/p:-function

//! scope !//
{
    var a=10;   // var is function scoped
    let b=20;   // let is block scoped
    const c=30; // const is block scoped
    console.log(a);  // o/p:-10
    console.log(b);  // o/p:-20
    console.log(c);  // o/p:-30
}
console.log(a);  // o/p:-10
console.log(b);  // o/p:-ReferenceError: b is not defined
console.log(c);  // o/p:-ReferenceError: c is not defined    
