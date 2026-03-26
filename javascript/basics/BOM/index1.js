//! navigator------------------------
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.platform)
// console.log(navigator.onLine)

//! location
function openNew(){
    window.location.href="./index2.html"
}

function Reloading(){
    window.location.reload()
}
console.log(location.port,"-port");
console.log(location.protocol,"-protocol");
console.log(location.hostname,"-hostname")
console.log(location.host,"---host")
console.log(location.pathname)

function page3rd(){
    window.location.href="./index3.html"
}

function forwardPage(){
    history.forward()
}
//! console
console.log("Hello everyone")
console.error("Bye Everyone")
console.warn("Bye Everyone")
console.log("hello hii bye!")

let emp={
    name:"kavya",
    age:21
}
console.table(emp);

//! document
// document.write(" I am learning html")
// document.write("in webtech")

// document.writeln("In a learning html")
// document.writeln("in webtech")

//! screen
console.log(screen.height);
console.log(screen.width);
console.log(screen.availHeight);
console.log(screen.availWidth);