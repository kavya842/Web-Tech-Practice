let emp={
    name:"anish",
    age:27
}
console.log(emp);

let empJson=JSON.stringify(emp);
console.log(empJson);

let empObj=JSON.parse(empJson)
console.log(empObj);
console.log(empObj.name);

