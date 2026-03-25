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