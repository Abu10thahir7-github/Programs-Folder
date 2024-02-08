// Convert the first letter of each word in a sentence to uppercase
const sentence = 'this is a sample sentence';
const titleCasedSentence = sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(titleCasedSentence);