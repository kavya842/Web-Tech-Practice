fetch("https://dummyjson.com/quotes").then((res)=>{
    console.log(res);
    return res.json()  
})
.then((val)=>{
    console.log(val.quotes);
    let output="";
    val.quotes.map((v)=>{
        console.log(v);
        output+=`
        <main>
        <h1>${v.id}</h1>
        <h2>${v.quote}</h2>
        <h3>Author:${v.author}</h3>
        </main>
        `
        
    });
    document.getElementById("root").innerHTML=output;  
}).catch(()=>{
    console.log("error in api");
    
})