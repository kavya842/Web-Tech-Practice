fetch("https://dummyjson.com/products").then((res)=>{
    console.log(res);
    return res.json()  
})
.then((val)=>{
    console.log(val.products);
    let output="";
    val.products.map((v)=>{
        console.log(v);
        output+=`
        <main>
        <h1>${v.id}</h1>
        <h2>${v.title}</h2>
        <p>${v.description}</p>
        <h2>${v.category}</h2>
        <h3>price:  ${v.price}</h3>
        <h3>Discount: ${v.discountPercentage}</h3>
        <h3>Rating:  ${v.rating}</h3>
        <h3>Stock:  ${v.stock}</h3>
        <h3>Price:  ${v.price}</h3>
        </main>
        `
        
    });
    document.getElementById("root").innerHTML=output;  
}).catch(()=>{
    console.log("error in api");
    
})