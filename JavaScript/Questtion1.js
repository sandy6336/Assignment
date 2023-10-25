function reverseWords(sentence) {
  const words = [];
  let wordStart = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (/[.,!?;'"(){}\[\]: ]/.test(sentence[i])) {
      const word = sentence.substring(wordStart, i);
      words.push(reverseWord(word));
      words.push(sentence[i]);
      wordStart = i + 1;
    }
  }

  const reversedSentence = words.join('');
  return reversedSentence;
}

function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

// Example usage:
const inputSentence = "This is a sunny day!";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
