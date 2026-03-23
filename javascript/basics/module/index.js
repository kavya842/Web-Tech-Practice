//! Default Export

// export default function add(a,b){
//     let c=a+b;
//     console.log(c);   
// }

//! Named Export
// export function multiply(a,b){
//     console.log(a*b);
    
// }

// export function add(a,b){
//     let c=a+b
//     console.log(c);
    
// }

//! --------- Named Export in another way
// function multiply(a,b){
//     console.log(a*b);
    
// }
// function add(a,b){
//     let c=a+b
//     console.log(c);
    
// }
// export{
//     multiply,add
// }

//! -----Named function in 3rd way
// function multiply(a,b){
//     console.log(a*b);
    
// }
// function add(a,b){
//     let c=a+b
//     console.log(c)
// }
// export{
//     multiply as multi, add as addition
// }

//! all exports
export function multiply(a,b){
    console.log(a*b)
}
export function add(a,b){
    let c=a+b;
    console.log(c)
}
export default function info(a,b){
    console.log(a+b+a);
}