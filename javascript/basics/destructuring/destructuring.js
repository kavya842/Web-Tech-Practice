//! object destructuring--------------------
// let emp={
//     name:"kavya",
//     skill:"python full stack",
//     address:"Andhra Pradesh"
// }
// let {name,skill,address}=emp;
// console.log(name);
// console.log(skill)
// console.log(address)

//! array destructuring---------------
// let arr=["html","css","javascript"]
// let [a,b,c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);

//! ------spread & rest operator----------
// let arr=["html","css","javascript","sql"]
// let b=[...arr];
// let b1=[...arr,"python"]          //! spread
// let [a,...b2]=arr                 //! rest
// console.log(a);
// console.log(b)
// console.log(b1)
// console.log(b2)


//! object
// let emp={
//     name:"Kavya Vankayalapati",
//     skill:"Ai Developer",
//     city:"ongole"
// }
// let a={...emp};   //! spread
// let a1={...emp,city:"Hyderabad"};    //! spread
// let{name,...b}=emp;       //! rest
// console.log(name);
// console.log(b);

//! object using constructor function--
function Cake(cname,cprice){
    this.cake_name=cname;
    this.cake_price=cprice;
}
let c1=new Cake("blackforest",600)
console.log(c1);
let c2=new Cake("whiteForest",900)
console.log(c2);
Cake.prototype.brand="cakeforest"
console.log(c1.brand);
console.log(c2.brand);





