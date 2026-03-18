//! Dom methods
//! 1) document.getElementById()
// let root=document.getElementById("root")
// console.log(root);
// root.style.color="green"
// root.style.backgroundColor="yellow"

//! 2)document.getElementsByClassname()
// let content=document.getElementsByClassName("content")
// console.log(content);
// content.item(1).style.color="green"  // when we have output in array and we have multiple outputs we use .item for target the item
// content[0].style.color="red"
// let contentArray=Array.from(content)  // in this it look like an array but it is not that actual array we have to convert by using this 
// console.log(contentArray)

//! 3)document.getElementBytagname()
// let tags=document.getElementsByTagName("h2")
// console.log(tags);
// tags.item(1).style.color="pink"

//! 4) document.querySelector()
// let a=document.querySelector("#root")
// let a1=document.querySelector("#root>p")
// let a2=document.querySelector(".content")
// let a3=document.querySelector("h2")
// let a4=document.querySelector("root") // undefined
// a.style.color="green"
// console.log(a);
// a1.style.color="red"
// console.log(a1);
// a2.style.color="blue"
// console.log(a2);

//! 5) document.querySelectorAll()
// let a=document.querySelectorAll("#root")
// let a1=document.querySelectorAll(".content")
// let a2=document.querySelectorAll("h2")
// a1[0].style.color="yellow"
// console.log(a1)
// a1[1].style.color="red"
// console.log(a1);

//! 6) getAttribute()
// let root=document.getElementById("root")
// root.style.color="blue"
// console.log(root.getAttribute("Id"));
// console.log(root.getAttribute("style"));

//! 7) setAttribute()
// let root=document.getElementById("root")
// root.setAttribute("class","rootclass")
// root.setAttribute("style","color:red")

//! 8)createElement()
let box=document.getElementById("box");
let newElement=document.createElement("h1");
newElement.innerText="i am a new element in js";
newElement.setAttribute("id","newElement");
//! 9)appendchild()
// box.appendChild(newElement)
//! append()
box.append(newElement)
//!prepend()
// box.prepend(newElement)