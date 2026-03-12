 //! Using Literal Way

// let emp={
//     name:"kavya",
//     city:"hyderabad",
//     age :27
// }
// console.log(emp); 
// {name:"kavya",city="hyderabad",age=27}   // to read
// console.log(emp.name);
// console.log(emp.city);
// console.log(emp.age);

// //! to insert 
// emp.skill="html";
// console.log(emp);

// //! To update 
// emp.age=23;
// console.log(emp);

// //! To delete
// delete emp.city;
// console.log(emp);

//! using object Construction
// let data=new Object({
//     name:"anusha",
//     age:24
// })
// console.log(data);
// data.skill='css';
// console.log(data);

//! using function as a constructor
// function cake(cname,cprice){
//     this.cake_name=cname;
//     this.cake_price=cprice;
// }
// let c1=new cake("Black forest",500)
// console.log(c1);
// let c2=new cake("red velvet",700)
// console.log(c2);

//! ex:-
// let student={
//     name:"kavya",
//     age:26,
//     skill:["html","css","javascript"]
// }
// console.log(student.skill);
// student.skill.map((v)=>{
//     console.log(v)
// })

// (or)

// let student={
//     name:"kavya",
//     age:26,
//     skill:["html","css","javascript"]
// }
// console.log(student.skill);
// student.skill.forEach((v)=>{
//     console.log(v)
// })
//! example 
let student=[{
    name:"kavya",
    skill:["html","css","js"]
},{
    name:"mani",
    skill:["python","sql"]
},{
    name:"ravi",
    skill:["manual testing","java"]
}]
student.map((k) => {
    k.skill.map((v) => {
        console.log(v);
    });
});