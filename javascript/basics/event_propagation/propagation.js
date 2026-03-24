//! bubbling phase
// let gp=document.getElementById("gp")
// let parent=document.getElementById("parent")
// let child=document.getElementById("child")

// gp.addEventListener("click",function info(e){
    // e.stopPropagation();
//     console.log("Gp triggered");
// gp.style.backgroundColor="red"    
// },false)

// parent.addEventListener("click",function info(e){
    // e.stopPropagation();
//     console.log("Parent triggered");
// parent.style.backgroundColor="green"    
// },false)

// child.addEventListener("click",function info(e){
    // e.stopPropagation();
//     console.log("child triggered");
// child.style.backgroundColor="yellow"    
// },false)

//! capturing phase

let gp=document.getElementById("gp")
let parent=document.getElementById("parent")
let child=document.getElementById("child")

gp.addEventListener("click",function info(e){
    // e.stopPropagation();
    console.log("Gp triggered");
gp.style.backgroundColor="red"    
},true)

parent.addEventListener("click",function info(e){
    // e.stopPropagation();
    console.log("Parent triggered");
parent.style.backgroundColor="green"    
},true)

child.addEventListener("click",function info(e){
    // e.stopPropagation();
    console.log("child triggered");
child.style.backgroundColor="yellow"    
},true)
