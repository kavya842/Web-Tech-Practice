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
// let student=[{
//     name:"kavya",
//     skill:["html","css","js"]
// },
// {
//     name:"mani",
//     skill:["python","sql"]
// },
// {
//     name:"ravi",
//     skill:["manual testing","java"]
// }]
// student.map((k) => {
//     k.skill.map((v) => {
//         console.log(v);
//     });
// });

//! example
// let user={
//     student:[
//         {
//             name:"kavya",
//             skill:["html","css","js"]
//         },
//         {
//             name:"mani",
//             skill:["python","n8n","sql"]
//         },{
//             name:"sailaja",
//             skill:["manual testing","java"]
//         }
//     ]
// }
// user.student.map((k)=>{
//     k.skill.map((v)=>
//     {
//         console.log(v)
//     })
// })
//! example
// let user={
//     student:[
//         {
//             name:"kavya",
//             skill:["html","css","js"],
//             mock:{
//                 tech:1,
//                 comm:2
//             }
//         },
//         {
//             name:"mani",
//             skill:["python","n8n","sql"],
//             mock:{
//                 tech:2,
//                 comm:2
//             }
//         },{
//             name:"sailaja",
//             skill:["manual testing","java"],
//             mock:{
//                 tech:3,
//                 comm:2
//             }
//         }
//     ]
// }
// user.student.map((v)=>{
//     console.log(v.mock.tech)
// })
//! example 
// let user={
//     student:[
//         {
//             name:"kavya",
//             skill:["html","css","js"],
//             mock:[{
//                 tech:1,
//                 comm:2
//             }]
//         },
//         {
//             name:"mani",
//             skill:["python","n8n","sql"],
//             mock:[{
//                 tech:2,
//                 comm:2
//             }]
//         },{
//             name:"sailaja",
//             skill:["manual testing","java"],
//             mock:[{
//                 tech:3,
//                 comm:2
//             }]
//         }
//     ]
// }
// user.student.map((v)=>{
//     console.log(v)
//      v.mock.map((k)=>{
//         console.log(k)
//         console.log(k.tech)
//      })
//     })

//! object methods
//! 1) object.keys
// let emp={
//     name:"kavya",
//     age:22,
//     skill:"html"

// }
// let empKeys=Object.keys(emp);
// console.log(empKeys);

//! 2) object.values
// let emp={
//     name:"kavya",
//     age:22,
//     skill:"html"

// }
// let empValues=Object.values(emp);
// console.log(empValues);

//! 3) freeze we can't update, insert, delete a new values or keys 
// let emp={
//     name:"kavya",
//     age:22,
//     skill:"html"
// }
// Object.freeze(emp);
// emp.age=27;
// emp.city="hyderabad";
// delete emp.skill;
// console.log(emp);

// console.log(Object.isFrozen(emp));   // to check whether it is freeze or not 

//! 4)seal object we can only update the keys and values but not insert and delete 
// let emp={
//     name:"kavya",
//     age:22,
//     skill:"html"
// }
// Object.seal(emp);
// emp.age=27;
// emp.city="hyderabad";
// delete emp.skill;
// console.log(emp);

// console.log(Object.isSealed(emp));