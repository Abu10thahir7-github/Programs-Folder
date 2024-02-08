const array = ['hello', 'world'];

const joinedString = array.join(' '); 
console.log(joinedString);

const sentence = 'this is a sample sentence';
const titleCasedSentence = sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(titleCasedSentence);