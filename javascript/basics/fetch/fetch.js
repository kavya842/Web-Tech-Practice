fetch("https://dummyjson.com/recipes").then((res)=>{
    console.log(res);
    return res.json()  
}).then((val)=>{
    console.log(val.recipes);
    let output="";
    val.recipes.map((v)=>{
        console.log(v);
        output+=`
        <main>
        <img src="${v.image}"/>
        <h2>${v.name}</h2>
        <h3>Rating:${v.rating}</h3>
        <h3>Servings:${v.servings}</-h3>
        </main>
        `
        
    });
    document.getElementById("root").innerHTML=output;  
}).catch(()=>{
    console.log("error in api");
    
})