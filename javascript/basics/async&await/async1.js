async function  fetchData(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let val=await res.json();
        let output="";
        val.map((u)=>{
            output+=`
            <div class="card">
                <h2>${u.name}</h2>
                <h4>@${u.username}</h4>

                <p><b>Email:</b> ${u.email}</p>
                <p><b>Phone:</b> ${u.phone}</p>
                <p><b>City:</b> ${u.address.city}</p>
                <p><b>Company:</b> ${u.company.name}</p>
                <p><b>Website:</b> ${u.website}</p>
            </div>`;
        });
        document.getElementById("root").innerHTML=output;
    } catch(err){
      console.log(err);
    }
}
fetchData()