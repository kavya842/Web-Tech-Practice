let btn=document.getElementById("btn");
let mode="dark"
btn.addEventListener("click",()=>{
    if(mode=="dark"){
        mode="light";
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        btn.textContent="light mode"
    }
    else{
        mode="dark"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        btn.textContent="dark mode"
    }
})