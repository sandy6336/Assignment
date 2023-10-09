function reverseWords(sentence) {
    // Splitting the sentence into words
    const words = sentence.split(' ');
  
    // Reverseing each word
    const reversedWords = words.map(word => {
      // Check if the word contains punctuation
      const punctuation = word.match(/[.,!?;'"(){}\[\]:]/);
      if (punctuation) {
        // If it contains punctuation, separate it from the word
        const wordWithoutPunctuation = word.replace(/[.,!?;'"(){}\[\]:]/g, '');
        const reversed = wordWithoutPunctuation.split('').reverse().join('');
        return reversed + punctuation[0];
      } else {
        return word.split('').reverse().join('');
      }
    });
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage:
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
  