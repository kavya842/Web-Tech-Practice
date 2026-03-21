// async function info(){
//     let p1=new Promise((res,rsj)=>{
//         setTimeout(()=>{
//             res('I am p1')
//         },2000)
//     })
//     let result=await p1;
//     console.log(result);
// }
// info()

//! with json data 
async function fetchData(){
    let res=await fetch("https://dummyjson.com/recipes");
    let val=await res.json();
    let output="";
    val.recipes.map((v)=>{
         output+=`
         <h1>${v.name}</h1>`;
    });
    document.getElementById("root").innerHTML=output;
}
fetchData();

//! try & catch
async function fetchData(){
    try{
    let res=await fetch("https://dummyjson.com/recipes");
    let val=await res.json();
    let output="";
    val.recipes.map((v)=>{
         output+=`
         <h1>${v.name}</h1>`;
    });
    document.getElementById("root").innerHTML=output;
} 
catch(err){
    console.log(err);
}
}
fetchData();