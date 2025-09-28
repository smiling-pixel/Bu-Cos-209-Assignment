var player = "Charles"; //"var" is the old way, avoid unless needed
let score = 0;//"let" is flexible, you can update the value
const maxScore = 10; //"const" means this will never change

score++; //increase score by 1
console.log('${player}"s" score: ${score}/${maxScore}');
//Charles's score: 6/10