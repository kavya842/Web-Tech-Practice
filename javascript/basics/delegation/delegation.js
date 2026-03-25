// document.getElementById("fooditems")
//             .addEventListener("click",function(e){
//                 if(e.target.className=="delete"){
//                     e.target.parentElement.remove();
//                 }
//             })
document.getElementById("fooditems").addEventListener("click",function (e){
    if(e.target.className=="delete"){
        e.target.parentElement.remove()
    }
})