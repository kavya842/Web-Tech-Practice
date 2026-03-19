// let btn=document.getElementById("btn");
// let mode="dark"
// btn.addEventListener("click",()=>{
//     if(mode=="dark"){
//         mode="light";
//         document.body.style.backgroundColor="black"
//         document.body.style.color="white"
//         btn.textContent="light mode"
//     }
//     else{
//         mode="dark"
//         document.body.style.backgroundColor="white"
//         document.body.style.color="black"
//         btn.textContent="dark mode"
//     }
// })
//! Random colours change when i click the button every time
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let randomColorCode=Math.floor(Math.random()*1000000);
    document.body.style.backgroundColor=`#${randomColorCode}`;
    btn.textContent=`colorcode-${randomColorCode}`
})
