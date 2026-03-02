//! 1) Named function!//
//! parametrised function !//
// function add(y,z){
//     let x=y+z
//     console.log(x)
// }
// add(10,12)
// add(2,4)
// add(10,11)

//! parametersied !//
// let a =Number(prompt("enter 1st number"));
// let b =Number(prompt("enter 2nd number"));
// let c =Number(prompt("enter 3rd number"));
// function add(x,y,z)
// {
//     let sum=x+y+z;
//     console.log(sum);
    
// }
// add(a,b,c)

//! 2)Anonymous function !//
//! it is a function without a name !//
//! it is also called lambda function !//
//! it is used when we want to use a function only once !//
//! it is used when we want to pass a function as an argument to another function !//
//! it is used when we want to return a function from another function !//
//! it is used when we want to create a function that is not accessible from outside the function !//
// function(){
//     console.log("I  am an anonymous function")
// }
// ()

//! 3) function  with expression !//
//! when we store a varilabe with a function then it is called function with expression !//
//! it is also called function expression !//
// let a=function(a,b){
//     console.log(a+b)
//     console.log("I  am an anonymous function")
// }
// a(2,3)

//! 4) Immediate invoke function expression (IIFE) !//
//! when we want to call a function immediately after its declaration then we use IIFE !//
//! it is also called self invoking function !//
//! it is used to create a new scope for variables !//
//! it is used to avoid polluting the global scope !//
//! it is used to create a private scope for variables !//
//! it is used to create a closure !//
//! it is used to create a module pattern !//
//! it is used to create a singleton pattern !//
//! it is used to create a namespace !//
//! it is used to create a function that is not accessible from outside the function !//
// (function(){    ex-1
//     console.log("I am an IIFE function")
//     alert("I am an IIFE function")
// })
// ();

// (function(a,b){    ex-2
//     console.log(a+b)
//     alert('using the IIFE function')
// })
// (2,3);

// (function(a,b){   ex-3
//     console.log(a*b)
//     alert('using  IIFE function')
// })
// (2,3);           


//! 5) Arrow function !//
//! it is a short hand way to write a function !//
//! it is introduced in ES6 !//
//! it is also called fat arrow function !//
//! it does not have its own this keyword !//
//! it is not suitable for methods !//
//! it is not suitable for constructors !//
//! it is not suitable for generator functions !//
//! it is not suitable for async functions !//
//! it is not suitable for functions that use arguments object !//
//! it is not suitable for functions that use super keyword !//
//! it is not suitable for functions that use new.target keyword !//
//! it is not suitable for functions that use this keyword !//
// let a=(b,c) => console.log(b+c);
// a(2,3)    //! one line of logic remove the curly braces and return keyword !//

// let a=(b,c) => {
//     let sum=b+c;
//     console.log(sum)
// }
// a(2,3)  //! more than one line of logic we have to use curly braces and return keyword !//

//!---when we have only one parameter we can remove the parentheses !//
// let a=b => console.log(b*2);
// a(5)

//! when we have no parameter we have to use empty parentheses !//
// let a=() => console.log("I am an arrow function")
// a()

//! when we have more than one parameter we have to use parentheses !//
// let a=(b,c,d) => console.log(b+c+d);
// a(2,3,5)

//! 6) Recursive function !//
//! it is a function that calls itself !//
//! it is used to solve problems that can be broken down into smaller subproblems !//
//! it is used to solve problems that can be solved using divide and conquer approach !//
//! it is used to solve problems that can be solved using dynamic programming approach !//
//! it is used to solve problems that can be solved using backtracking approach !//
//! it is used to solve problems that can be solved using memoization approach !//
//! it is used to solve problems that can be solved using tabulation approach !//
//! factorial of a number using recursion !//
function info(){
    console.log('i am recursive ');
    info();   
}
info();




