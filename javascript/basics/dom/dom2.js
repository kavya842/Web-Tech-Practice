//! ex 1
// function info(){
//     alert("I am using the event")
// }
// let btn=document.getElementById("btn")
// btn.addEventListener("click",info)

//! ex 2
// document.getElementById("btn").addEventListener("click",()=>{
//     alert("I am using the event")
// })

//! ex 3
document.getElementById("btn").addEventListener("click",function info(){
    alert("Hii i am an event")
})