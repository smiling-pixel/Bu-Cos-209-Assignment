const grades = [45, 80, 92, 60, 33];
//keep only the grades that passed 
const passing = grades.filter(grade=> grade>= 50);
//Add 5 bonus points to each passing grade
const boosted = passing.map(grade => grade + 5);
console.log(passing);//[80, 92, 60]
console.log(boosted); //[85, 97, 65]