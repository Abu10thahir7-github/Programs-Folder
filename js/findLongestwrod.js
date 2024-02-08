const sentence = 'this is a sample sentence';


// Find longest word
const words = sentence.split(' ');
let longestWord = '';
for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);