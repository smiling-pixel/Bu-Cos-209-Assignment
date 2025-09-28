const arr1 = [1,2,3];
const arr2 = [4, 5];

//spread "opens up" arrays and combines them 
const combined = [...arr1, ...arr2];
console.log(combined); //[1,2,3,4,5]

const person = { name:"Frank", age:28};

//Spread here copies the old object and adds/changes stuff
const updated = {...person, age:29, city:"London"};
console.log(updated); //{name:"Frank", age: 29, city:London}