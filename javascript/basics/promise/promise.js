// console.log("first line")
// let p=new Promise((res,rej)=>{
//        res(" i am resolved")
    //    rej("i am rejected")
// })
// console.log(p);
// p.then((v)=>{
//     console.log(v);
//     console.log(" i am then block")
// })
// p.catch((v)=>{
//     console.log(v);
//     console.log(" i am catch block")
// })
// p.finally((v)=>{
//     console.log(v);
//     console.log(" i am finally block")
// })
// p.then((v)=>{
//     console.log(v);
//     console.log(" I am then block");
// }).catch((v)=>{
//     console.log(v)
//     console.log(" i am catch block")
// }).finally((v)=>{
//     console.log(v);
//     console.log(" i am finally  block")
// })

//! timer events
//! 1) setTimeOut()
//!2) setInterval()
//! 3) clearTimeOut()
//! 4) clearInterval()
//! setTimeOut
// setTimeout(()=>{
//     console.log("Happy Birthday Babulu")
// },5000)
//! setInterval
// setInterval(()=>{
//     console.log("Happy Birthday Babulu")
// },5000)

//! methods in promise
// !----------all()--------------------------
//! ex 1
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     rej("I am rej p1")
// })

// Promise.all([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })
//! ex 2
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     res("I am res p1")
// })

// Promise.all([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })

// !--output="it is giving output in the form of array of result"- 
//  Promise.all()
// One reject → directly catch
// No full results!//

// !---allsettled---------------------!///
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     rej("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     res("I am res p1")
// })

// Promise.allSettled([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })
// Promise.all → one fail = catch
// Promise.allSettled → always then
// !-------race()-------!//
//!Promise.race() is a method that returns the result of the first promise that gets settled (either resolved or rejected) among multiple promises.
// let p1=new Promise((res,rej)=>{
//     setTimeout((v)=>{
//         res("I am res p1")
//     },30000)
// })
// let p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("I am res p2")
//     },5001)
// })
// let p3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("I am res p3")
//     },5000)
// })

// Promise.race([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");   
// })

// !---------any()--------------
//!Promise.any() is a method that returns the result of the first fulfilled (resolved) promise among multiple promises.
//!It rejects only when all promises are rejected.
// let p1=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p2=new Promise((res,rej)=>{
//     res("I am res p1")
// })
// let p3=new Promise((res,rej)=>{
//     res("I am res p1")
// })

// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })




// let p1=new Promise((res,rej)=>{
//     setTimeout((v)=>{
//         res("I am res p1")
//     },30000)
// })
// let p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("I am res p2")
//     },5001)
// })
// let p3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("I am res p3")
//     },5000)
// })

// Promise.any([p1,p2,p3]).then((v)=>{
//     console.log(v);
//     console.log("Then block");
    
// }).catch((v)=>{
//     console.log(v);
//     console.log("Catch block");
    
// }).finally(()=>{
//     console.log("Finally block");
    
// })


// !----------PROMISE Chaining--------------!//
// let p1=new Promise((res,rej)=>{
//     res("i am res p1")
// }).then(()=>{
//     console.log("I am then block");
//     return new Promise((res,rej)=>{
//         rej("i am res in chaining")
//     }).then(()=>{
//         console.log("i am then block in chaining");
        
//     }).catch(()=>{
//         console.log("I am catch block in chaining");
        
//     }).finally(()=>{
//         console.log("I am finally block in chaining");
        
//     })
// }).catch(()=>{
//     console.log("I am catch block.");
    
// }).finally(()=>{
//     console.log("I am finally !!!");
    
// })