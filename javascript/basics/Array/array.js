//! Using Literal way !//
// let arr=["html","css","Javascript"];
// console.log(arr)  // To read the array

// arr[2]="js" //to update
// console.log(arr);

// arr[3]="react js";   //to insert
// console.log(arr);

// delete arr[1];   // to delete
// console.log(arr);
// console.log(arr[1]);

//! using Array Constructor !//
// let arr=new Array()
// console.log(arr);
// arr[0]="python"
// arr[1]="sql"
// arr[2]="javascript"
// console.log(arr);

//! Methods in Array !//
//! 1) length method 
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// console.log(arr);
// console.log(arr.length);
// console.log(arr);


//! 2) push method
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// arr.push("paneer","mutton biryani");
// console.log(arr);


//!3) pop method 
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// arr.pop()
// console.log(arr);


//!4) shift method 
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// arr.shift()
// console.log(arr);

//!5) unshift method
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// arr.unshift("french fries","ice cream")
// console.log(arr);

//!6) slice method 
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// console.log(arr.slice(1,4));       // it will not mutate original array
// console.log(arr)

//!7) splice method 
// let arr=["samosa","pizza","burger","kfc","chicken lollipops"]
// arr.splice(1,2,"kulfi","coffee","jilebo")         // will mutate original array
// console.log(arr);

//!8) Map method 
// let arr=[10,20,30,40,50]
// let arr1=arr.map((v)=>{
//     return v+5;
// })
// console.log(arr1);

//!9) Filter method
// let arr=[12,11,17,8,10,6,15,60]
// let arr1=arr.filter(
//     (v)=>{
//     return v%2==0
//     }
// )
// console.log(arr1);

//!  filter + include example           
// let food=["chicken biryani","veg biryani","momos","pizza","waffle","chinese","chicken lollipop"];
// let FilteredFood=food.filter((v)=>{
//     return v.includes("chi");
// })
// console.log(FilteredFood);

//! 10) Reduce method 
// let arr=[1,2,3,4,5,6]
// let arr1=arr.reduce((acc,cv)=>(acc+cv),0)
// console.log(arr1);

// let arr=[1,2,3,4,5,6]
// let arr1=arr.reduce((acc,cv)=>(acc*cv),1)
// console.log(arr1);

// let arr=[1,2,3,4,5,6]
// let arr1=arr.reduce((acc,cv)=>{
//     console.log(acc,"accumulator")
//     console.log(acc,"currentvalue")
//     return acc+cv
// },0)
// console.log(arr1)

//! 11) some method 
// let arr=[1,2,3,4,5,,,6,,7,8,9,10]
// let arr1=arr.some((v)=>{
//     return v>1;
// })
// console.log(arr1)


//! 12) every method
// let arr=[1,2,3,4,5,,,6,,7,8,9,10]
// let arr1=arr.every((v)=>{
//     return v>0;
// })
// console.log(arr1)

//! 13) Find method
// let arr=[3,4,5,,,6,,7,8,9,10]
// let arr1=arr.find((v)=>{
//     return v%2==0;
// })
// console.log(arr1)

//! 14) concat method
// let arr=["html","css"]
// let arr1=["js","react js"]
// let arr2=["java","python"]
// console.log(arr.concat(arr1,arr2));

//! 15) includes method
// let arr=["html","css","js","react js"]
// console.log(arr.includes("js"))
// console.log(arr.includes("Js"))

//! 16) indexOf method
// let arr=["html","css","js","react js"]
// console.log(arr.indexOf("js"))

//!17)  lastIndexOf method
// let arr=["html","css","js","react js","Js"]
// console.log(arr.lastIndexOf("Js",3))

//!18) flat method
// let arr=["html",["css",["js",["react js"]]]]
// let arr1=arr.flat(3)
// console.log(arr1);
// console.log(arr);

//! 19) reverse method
// let arr=[1,2,3,4,56,7,8]
// arr.reverse()
// console.log(arr);    // will mutate original array

//! 20) fill method
// let arr=["html","css","js","react js"]
// arr.fill("java",0,3)
// console.log(arr);

//! 21) Array.from method
// let str="jspiders"
// let arr=Array.from(str)
// console.log(arr);

//! 22) toString method
// let arr=["html","css","js"]
// let arr1=arr.toString();
// console.log(arr1);
// console.log(arr);

//! Assignment 
// let arr=[2,null,"hello",true,4,false,,undefined,7]
// o/p:- [2,4,7]














