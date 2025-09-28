const user ={ name: "Bob", age:20, city:"London"};

//pull out just the parts we care about 
const { name, city } = user;
console.log('${name} lives in ${city}'); //Bob lives in London

const colors = ["red", "green", "blue"];

//skip the second one and only grab 1st + 3rd
const[first, ,third] = colors;
console.log(first, third); // red blue