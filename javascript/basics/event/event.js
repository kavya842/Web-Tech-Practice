// function info(){
//     console.log("event triggered")
//     alert("Event is triggered")
// }
// let btn=document.getElementById("btn")  //!---1st way

// btn.onclick=info; //!-----2nd way

// btn.addEventListener("click",info)   //!--- 3rd way 

//! MOUSE EVENTS-------------
//! 1) mouse down
// let btn=document.getElementById("btn")
// btn.addEventListener("mousedown",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })

//! 2) mouseover
// let btn=document.getElementById("btn")
// btn.addEventListener("mouseover",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })

//! 3) mouseup
// let btn=document.getElementById("btn")
// btn.addEventListener("mouseup",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })

//! 4) mouseout
// let btn=document.getElementById("btn")
// btn.addEventListener("mouseout",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })

//! 5) mouseenter
// let btn=document.getElementById("btn")
// btn.addEventListener("mouseenter",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })
//! 6) mouseleave
// let btn=document.getElementById("btn")
// btn.addEventListener("mouseleave",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })
//! 7) mousemove
// let btn=document.getElementById("btn")
// btn.addEventListener("mousemove",function info(event){
//     console.log(event.clientX);
//     console.log(event.clientY);
//     console.log("event triggered")
// })

//! ---------Keyboard Event-------------
//! 1) key press
// let username=document.getElementById("username");
// username.addEventListener("keypress",function info(e){
// alert(" I am a keyboard Event");
// console.log(e.key);
// })

//! 2) keyup
let username=document.getElementById("username");
username.addEventListener("keyup",function info(e){
alert(" I am a keyboard Event");
console.log(e.key);
})

//! 3)keydown
// let username=document.getElementById("username");
// username.addEventListener("keydown",function info(e){
// alert(" I am a keyboard Event");
// console.log(e.key);
// })